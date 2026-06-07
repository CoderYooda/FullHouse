<?php

namespace App\Service\Telegram;

use App\Models\User;
use App\Repositories\TelegramUserRepository;
use App\Repositories\UserRepository;
use App\Repositories\CredentialRepository;
use App\Service\UserMergeService;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class TelegramService
{
    public function __construct(
        protected readonly TelegramUserRepository $telegramRepository,
        protected readonly UserRepository $userRepository,
        protected readonly CredentialRepository $credentialRepository,
        protected readonly UserMergeService $mergeService
    ) {}

    public function validateTelegramHash(array $data, string $botToken): bool
    {
        if (!isset($data['hash'])) {
            Log::error('Telegram hash missing', $data);
            return false;
        }

        $hash = $data['hash'];
        unset($data['hash']);
        ksort($data);

        $dataCheckArr = [];
        foreach ($data as $key => $value) {
            $dataCheckArr[] = $key . '=' . (string)$value;
        }
        $dataCheckString = implode("\n", $dataCheckArr);

        $secretKey = hash('sha256', $botToken, true);
        $calculatedHash = hash_hmac('sha256', $dataCheckString, $secretKey);

        return hash_equals($calculatedHash, $hash);
    }

    public function loginOrRegisterViaTelegram(array $telegramData): User
    {
        $telegramId = (string)$telegramData['id'];

        return DB::transaction(function () use ($telegramData, $telegramId) {
            $credential = $this->credentialRepository->findByProvider('telegram', $telegramId);

            if ($credential) {
                $user = $credential->user;
                if (!$user->is_active) {
                    $this->userRepository->update($user->id, ['is_active' => true]);
                }
                return $user;
            }

            $telegramUser = $this->telegramRepository->create([
                'telegram_id' => $telegramId,
                'first_name' => $telegramData['first_name'] ?? null,
                'last_name' => $telegramData['last_name'] ?? null,
                'username' => $telegramData['username'] ?? null,
                'language_code' => $telegramData['language_code'] ?? null,
                'allows_write_to_pm' => true,
                'photo_url' => $telegramData['photo_url'] ?? null,
            ]);

            $user = $this->userRepository->create([
                'name' => $telegramData['first_name'] ?? '',
                'public_name' => $telegramData['username'] ?? '',
                'email' => $telegramId . '@telegram.com',
                'password' => Hash::make('123456'),
                'is_active' => true,
                'telegram_user_id' => $telegramUser->id,
                'agreement' => false,
            ]);

            $this->credentialRepository->createForUser(
                $user->id,
                'telegram',
                $telegramId,
                ['username' => $telegramData['username'] ?? null]
            );

            return $user;
        });
    }

    public function linkTelegramToUser(User $currentUser, array $telegramData, ?int $resolvedCityId = null): array
    {
        $telegramId = (string)$telegramData['id'];

        return DB::transaction(function () use ($currentUser, $telegramId, $telegramData, $resolvedCityId) {

            if ($this->credentialRepository->findByProvider('telegram', $telegramId)) {
                return [
                    'message' => 'Telegram уже привязан',
                    'user' => $currentUser
                ];
            }

            $telegramUser = $this->telegramRepository->findByTelegramId($telegramId);
            $sourceUser = $telegramUser
                ? $this->userRepository->findByTelegramUserId($telegramUser->id)
                : null;

            if ($sourceUser && $sourceUser->is_active && $sourceUser->id !== $currentUser->id) {
                $this->mergeService->merge($sourceUser, $currentUser, 'link_telegram_to_web', $resolvedCityId);
                return [
                    'message' => 'Аккаунты объединены',
                    'user' => $currentUser->fresh()
                ];
            }

            if (!$telegramUser) {
                $telegramUser = $this->telegramRepository->create([
                    'telegram_id' => $telegramId,
                    'first_name' => $telegramData['first_name'] ?? null,
                    'last_name' => $telegramData['last_name'] ?? null,
                    'username' => $telegramData['username'] ?? null,
                    'language_code' => $telegramData['language_code'] ?? null,
                    'allows_write_to_pm' => true,
                    'photo_url' => $telegramData['photo_url'] ?? null,
                ]);
            }

            $this->userRepository->update($currentUser->id, ['telegram_user_id' => $telegramUser->id]);
            $this->credentialRepository->createForUser(
                $currentUser->id,
                'telegram',
                $telegramId,
                ['username' => $telegramData['username'] ?? null]
            );

            return [
                'message' => 'Telegram привязан',
                'user' => $currentUser->fresh()
            ];
        });
    }

    public function unlinkTelegram(User $user): void
    {
        DB::transaction(function () use ($user) {
            $this->credentialRepository->deleteByProvider($user->id, 'telegram');
            $this->userRepository->update($user->id, ['telegram_user_id' => null]);
        });
    }
}