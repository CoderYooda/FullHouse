<?php

namespace App\Console\Commands;

use App\Models\User;
use App\Models\UserCredential;
use Illuminate\Console\Command;

class MigrateUserCredentials extends Command
{
    protected $signature = 'users:migrate-credentials';
    protected $description = 'Create user_credentials for existing Telegram users and activate them (skip duplicates)';

    public function handle()
    {
        $users = User::whereNotNull('telegram_user_id')->get();
        $total = $users->count();
        $created = 0;
        $skipped = 0;
        $activated = 0;

        foreach ($users as $user) {
            $telegramUser = $user->telegramUser;
            if (!$telegramUser) {
                continue;
            }

            $telegramId = $telegramUser->telegram_id;

            // Проверяем, существует ли уже credential для этого telegram_id
            $existingCredential = UserCredential::where('provider', 'telegram')
                ->where('provider_uid', $telegramId)
                ->first();

            if (!$existingCredential) {
                $user->credentials()->create([
                    'provider' => 'telegram',
                    'provider_uid' => $telegramId,
                    'provider_data' => ['username' => $telegramUser->username],
                ]);
                $created++;
                $this->info("Created credential for user {$user->id} (telegram_id: {$telegramId})");
            } else {
                // Если запись существует, но принадлежит другому пользователю – предупреждение
                if ($existingCredential->user_id !== $user->id) {
                    $this->warn("Credential for telegram_id {$telegramId} already belongs to user {$existingCredential->user_id}, skipping user {$user->id}");
                } else {
                    $this->line("Credential for user {$user->id} already exists, skipped.");
                }
                $skipped++;
            }

            // Активируем пользователя, если он не активен
            if (!$user->is_active) {
                $user->is_active = true;
                $user->save();
                $activated++;
                $this->info("Activated user {$user->id}");
            }
        }

        $this->info("Done. Total users: {$total}, created: {$created}, skipped: {$skipped}, activated: {$activated}.");
    }
}