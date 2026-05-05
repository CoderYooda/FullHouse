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
        // ==================== 1. МИГРАЦИЯ ТУРНИРОВ ИЗ КОМПАНИЙ В ГОРОДА ====================
        $this->info('Step 1: МИГРАЦИЯ ТУРНИРОВ ИЗ КОМПАНИЙ В ГОРОДА ...');

        // Находим города
        $belgorod = City::where('name', 'Белгород')->first();
        $voronezh = City::where('name', 'Воронеж')->first();

        if (!$belgorod || !$voronezh) {
            $this->error('Города не найдены. Пожалуйста, сначала выполните миграцию.');
            return 1;
        }

        // Находим компании по slug
        $blgCompany = Company::where('slug', 'blg')->first();
        $vzhCompany = Company::where('slug', 'vzh')->first();

        // Переносим турниры компании blg в Белгород
        if ($blgCompany) {
            $count = Tournament::where('company_id', $blgCompany->id)
                ->update(['city_id' => $belgorod->id]);
            $this->info("Перемещено {$count}  'blg' в город Белгород");
        } else {
            $this->warn("Компания 'blg' не найдена, пропускаем...");
        }

        // Переносим турниры компании vzh в Воронеж
        if ($vzhCompany) {
            $count = Tournament::where('company_id', $vzhCompany->id)
                ->update(['city_id' => $voronezh->id]);
            $this->info("Перемещено {$count} турниров из компании 'vzh' в город Воронеж");
        } else {
            $this->warn("Компания 'vzh' не найдена, пропускаем...");
        }

        // Все остальные турниры (если есть) – оставляем без города или переносим в Белгород по умолчанию
        $otherCount = Tournament::whereNull('city_id')->whereNotNull('company_id')->count();
        if ($otherCount > 0) {
            Tournament::whereNull('city_id')->whereNotNull('company_id')
                ->update(['city_id' => $belgorod->id]);
            $this->info("{$otherCount} турниров было без города и переехало в Белгород");
        }

        // ==================== НАЗНАЧАЕМ АДМИНИСТРАТОРОВ ====================
        $this->info('Step 2: Setting up administrators...');

        // Administrator для Белгорода
        $adminBelgorod = User::where('name', 'Administrator')->first();
        if ($adminBelgorod) {
            $adminBelgorod->is_admin = true;
            $adminBelgorod->city_id = $belgorod->id;
            $adminBelgorod->save();
            $this->info("Администратор для Белгорода назначен");
        }

        // AdministratorVZH для Воронежа
        $adminVoronezh = User::where('name', 'AdministratorVZH')->first();
        if ($adminVoronezh) {
            $adminVoronezh->is_admin = true;
            $adminVoronezh->city_id = $voronezh->id;
            $adminVoronezh->save();
            $this->info("Администратор для Воронежа назначен");
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
                $this->info("Созданы учетные данные для пользователя {$user->id} (telegram_id: {$telegramId})");
            } else {
                if ($existingCredential->user_id !== $user->id) {
                    $this->warn("Учетные данные для telegram_id {$telegramId} уже принадлежат пользователю {$existingCredential->user_id}, пользователь {$user->id} пропущен");
                } else {
                    $this->line("Учетные данные для пользователя {$user->id} уже существуют, пропущены.");
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
        $this->info('Миграция турниров и пользователей прошла успешно!');
        $this->table(
            ['Step', 'Details'],
            [
                ['Турниры в Белгороде', $blgCompany ? Tournament::where('city_id', $belgorod->id)->count() . ' tournaments' : 'N/A'],
                ['Турниры в Воронеже', $vzhCompany ? Tournament::where('city_id', $voronezh->id)->count() . ' tournaments' : 'N/A'],
                ['Пользователей удачно мигрировало', $created],
                ['Пользователей при миграции пропущено', $skipped],
                ['Пользователей пришлось активировать', $activated],
            ]
        );

        return 0;
    }
}