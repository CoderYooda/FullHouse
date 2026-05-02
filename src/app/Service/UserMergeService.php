<?php

namespace App\Service;

use App\Models\TelegramUser;
use App\Models\User;
use App\Models\Feedback;
use App\Models\Participant;
use App\Models\MergeHistory;
use App\Models\UserCredential;
use Illuminate\Support\Facades\DB;

class UserMergeService
{
    public function merge(User $source, User $target, string $reason = 'manual', ?int $resolvedCityId = null)
    {
        if ($source->id === $target->id) {
            throw new \Exception('Cannot merge user with itself');
        }
        if (!$source->is_active || !$target->is_active) {
            throw new \Exception('One of users is already merged or deleted');
        }

        $finalCityId = $this->resolveCityConflict($source, $target, $resolvedCityId);

        DB::transaction(function () use ($source, $target, $reason, $finalCityId) {
            $this->mergeUserData($source, $target);

            // 1. Перенос участников турниров (через модель Participant)
            $this->mergeParticipants($source, $target);

            // 2. Перенос отзывов (Feedback)
            $this->mergeFeedback($source, $target);

            // 3. Перенос способов входа
            $this->mergeCredentials($source, $target);

            // 4. Обновление города цели
            if ($finalCityId !== null) {
                $target->city_id = $finalCityId;
                $target->save();
            }

            // 5. Журнал слияния
            $summary = [
                'participants_moved' => Participant::where('user_id', $source->id)->count(),
                'feedback_moved' => Feedback::where('user_id', $source->id)->count(),
                'credentials_moved' => $source->credentials()->count(),
            ];
            MergeHistory::create([
                'from_user_id' => $source->id,
                'to_user_id' => $target->id,
                'merged_summary' => $summary,
                'reason' => $reason,
            ]);

            // 6. Деактивация источника
            $source->merged_into_user_id = $target->id;
            $source->is_active = false;
            $source->save();
        });
    }

    protected function mergeUserData(User $source, User $target)
    {
        // Если у источника (Telegram) есть имя — обновляем цель
        if ($source->name) {
            $target->name = $source->name;
        }
        if ($source->public_name) {
            $target->public_name = $source->public_name;
        }
        // Аватарка — через связь с TelegramUser
        if ($source->telegramUser && $source->telegramUser->photo_url) {
            // Создаём или обновляем TelegramUser у цели
            $telegramUser = $target->telegramUser;
            if (!$telegramUser) {
                $telegramUser = new TelegramUser();
                $telegramUser->telegram_id = $source->telegramUser->telegram_id;
                $telegramUser->allows_write_to_pm = true;
            }
            $telegramUser->first_name = $source->telegramUser->first_name;
            $telegramUser->last_name = $source->telegramUser->last_name;
            $telegramUser->username = $source->telegramUser->username;
            $telegramUser->photo_url = $source->telegramUser->photo_url;
            $telegramUser->language_code = $source->telegramUser->language_code;
            $telegramUser->save();

            $target->telegram_user_id = $telegramUser->id;
        }
        $target->save();
    }

    protected function mergeParticipants(User $source, User $target)
    {
        $sourceParticipants = Participant::where('user_id', $source->id)->get();
        foreach ($sourceParticipants as $participant) {
            $existing = Participant::where('user_id', $target->id)
                ->where('tournament_id', $participant->tournament_id)
                ->first();
            if ($existing) {
                // Если запись уже есть – удаляем дубль источника
                $participant->delete();
            } else {
                $participant->user_id = $target->id;
                $participant->save();
            }
        }
    }

    protected function mergeFeedback(User $source, User $target)
    {
        Feedback::where('user_id', $source->id)->update(['user_id' => $target->id]);
    }

    protected function mergeCredentials(User $source, User $target)
    {
        foreach ($source->credentials as $cred) {
            $exists = UserCredential::where('provider', $cred->provider)
                ->where('provider_uid', $cred->provider_uid)
                ->where('user_id', $target->id)
                ->exists();
            if (!$exists) {
                $cred->user_id = $target->id;
                $cred->save();
            }
        }
    }

    protected function resolveCityConflict(User $source, User $target, ?int $resolvedCityId)
    {
        if ($resolvedCityId !== null) {
            return $resolvedCityId;
        }
        if ($target->city_id !== null) {
            return $target->city_id;
        }
        if ($source->city_id !== null) {
            return $source->city_id;
        }
        return null;
    }
}