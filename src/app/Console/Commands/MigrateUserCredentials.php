<?php

namespace App\Console\Commands;

use App\Models\City;
use App\Models\Company;
use App\Models\Tournament;
use App\Models\User;
use App\Models\UserCredential;
use Illuminate\Console\Command;

class MigrateUserCredentials extends Command
{
    protected $signature = 'users:migrate-credentials';
    protected $description = 'Migrate existing users to user_credentials and assign tournaments to cities';

    public function handle()
    {
        $this->info('Starting migration...');

        // ==================== 1. МИГРАЦИЯ ТУРНИРОВ ИЗ КОМПАНИЙ В ГОРОДА ====================
        $this->info('Step 1: Migrating tournaments from companies to cities...');

        // Находим города
        $belgorod = City::where('name', 'Белгород')->first();
        $voronezh = City::where('name', 'Воронеж')->first();

        if (!$belgorod || !$voronezh) {
            $this->error('Cities not found. Please run cities migration first.');
            return 1;
        }

        // Находим компании по slug
        $blgCompany = Company::where('slug', 'blg')->first();
        $vzhCompany = Company::where('slug', 'vzh')->first();

        // Переносим турниры компании blg в Белгород
        if ($blgCompany) {
            $count = Tournament::where('company_id', $blgCompany->id)
                ->update(['city_id' => $belgorod->id]);
            $this->info("Moved {$count} tournaments from 'blg' company to Belgorod city");
        } else {
            $this->warn("Company 'blg' not found, skipping...");
        }

        // Переносим турниры компании vzh в Воронеж
        if ($vzhCompany) {
            $count = Tournament::where('company_id', $vzhCompany->id)
                ->update(['city_id' => $voronezh->id]);
            $this->info("Moved {$count} tournaments from 'vzh' company to Voronezh city");
        } else {
            $this->warn("Company 'vzh' not found, skipping...");
        }

        // Все остальные турниры (если есть) – оставляем без города или переносим в Белгород по умолчанию
        $otherCount = Tournament::whereNull('city_id')->whereNotNull('company_id')->count();
        if ($otherCount > 0) {
            Tournament::whereNull('city_id')->whereNotNull('company_id')
                ->update(['city_id' => $belgorod->id]);
            $this->info("Moved {$otherCount} tournaments from other companies to Belgorod city");
        }

        // ==================== 2. МИГРАЦИЯ ПОЛЬЗОВАТЕЛЕЙ ====================
        $this->info('Step 2: Migrating users to user_credentials...');

        $users = User::whereNotNull('telegram_user_id')->get();
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

        // ==================== 3. ИТОГИ ====================
        $this->info('Migration completed!');
        $this->table(
            ['Step', 'Details'],
            [
                ['Tournaments to Belgorod', $blgCompany ? Tournament::where('city_id', $belgorod->id)->count() . ' tournaments' : 'N/A'],
                ['Tournaments to Voronezh', $vzhCompany ? Tournament::where('city_id', $voronezh->id)->count() . ' tournaments' : 'N/A'],
                ['Users credentials created', $created],
                ['Users credentials skipped', $skipped],
                ['Users activated', $activated],
            ]
        );

        return 0;
    }
}