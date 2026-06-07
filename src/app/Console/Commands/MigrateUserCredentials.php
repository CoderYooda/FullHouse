<?php

namespace App\Console\Commands;

use App\Models\City;
use App\Models\Company;
use App\Models\Tournament;
use App\Models\Season;
use App\Models\Feedback;
use App\Models\User;
use App\Models\UserCredential;
use Illuminate\Console\Command;

class MigrateUserCredentials extends Command
{
    protected $signature = 'users:migrate-credentials';
    protected $description = 'Migrate';

    public function handle()
    {
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

        // ==================== 1. ОБЪЕДИНЕНИЕ СЕЗОНОВ ====================
        $this->info('Step 1: Объединение дублирующихся сезонов...');

        if ($blgCompany && $vzhCompany) {
            $mainSeason = Season::where('company_id', $blgCompany->id)->first();
            $duplicateSeason = Season::where('company_id', $vzhCompany->id)->first();

            if ($mainSeason && $duplicateSeason && $mainSeason->id !== $duplicateSeason->id) {
                // Переносим все турниры дубликатного сезона в основной
                Tournament::where('season_id', $duplicateSeason->id)->update(['season_id' => $mainSeason->id]);
                $duplicateSeason->delete();
                $this->info("Сезоны объединены: оставлен '{$mainSeason->name}', удалён дубликат");
            }
        }

        // Убираем company_id у сезонов
        Season::query()->update(['company_id' => null]);
        $this->info('Привязка сезонов к компаниям удалена');

        // ==================== 2. МИГРАЦИЯ ТУРНИРОВ ====================
        $this->info('Step 2: Миграция турниров из компаний в города...');

        if ($blgCompany) {
            $count = Tournament::where('company_id', $blgCompany->id)->update(['city_id' => $belgorod->id]);
            $this->info("Перемещено {$count} турниров из 'blg' в Белгород");
        }

        if ($vzhCompany) {
            $count = Tournament::where('company_id', $vzhCompany->id)->update(['city_id' => $voronezh->id]);
            $this->info("Перемещено {$count} турниров из 'vzh' в Воронеж");
        }

        $otherCount = Tournament::whereNull('city_id')->whereNotNull('company_id')->count();
        if ($otherCount > 0) {
            Tournament::whereNull('city_id')->whereNotNull('company_id')->update(['city_id' => $belgorod->id]);
            $this->info("Перемещено {$otherCount} турниров без города в Белгород");
        }

        // ==================== 3. МИГРАЦИЯ ОБРАЩЕНИЙ ====================
        $this->info('Step 3: Миграция обращений из компаний в города...');

        if ($blgCompany) {
            $count = Feedback::where('company_id', $blgCompany->id)->update(['city_id' => $belgorod->id]);
            $this->info("Перемещено {$count} обращений из 'blg' в Белгород");
        }

        if ($vzhCompany) {
            $count = Feedback::where('company_id', $vzhCompany->id)->update(['city_id' => $voronezh->id]);
            $this->info("Перемещено {$count} обращений из 'vzh' в Воронеж");
        }

        $otherCount = Feedback::whereNull('city_id')->whereNotNull('company_id')->count();
        if ($otherCount > 0) {
            Feedback::whereNull('city_id')->whereNotNull('company_id')->update(['city_id' => $belgorod->id]);
            $this->info("Перемещено {$otherCount} обращений без города в Белгород");
        }

        // Очищаем company_id у обращений
        Feedback::query()->update(['company_id' => null]);
        $this->info('Привязка обращений к компаниям удалена');

        // ==================== 4. НАЗНАЧАЕМ АДМИНИСТРАТОРОВ ====================
        $this->info('Step 4: Назначение администраторов...');

        $adminBelgorod = User::where('name', 'Administrator')->first();
        if ($adminBelgorod) {
            $adminBelgorod->is_admin = true;
            $adminBelgorod->city_id = $belgorod->id;
            $adminBelgorod->save();
            $this->info("Администратор для Белгорода назначен");
        }

        $adminVoronezh = User::where('name', 'AdministratorVZH')->first();
        if ($adminVoronezh) {
            $adminVoronezh->is_admin = true;
            $adminVoronezh->city_id = $voronezh->id;
            $adminVoronezh->save();
            $this->info("Администратор для Воронежа назначен");
        }

        // ==================== 5. МИГРАЦИЯ ПОЛЬЗОВАТЕЛЕЙ ====================
        $this->info('Step 5: Миграция пользователей в user_credentials...');

        $users = User::whereNotNull('telegram_user_id')->get();
        $created = 0;
        $skipped = 0;
        $activated = 0;

        ///////
        $progressBar = $this->output->createProgressBar(count($users));
        $progressBar->start();

        foreach ($users as $user) {
            $telegramUser = $user->telegramUser;
            if (!$telegramUser) {
                continue;
            }

            $telegramId = $telegramUser->telegram_id;

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
//                $this->info("Созданы учётные данные для пользователя {$user->id}");
            } else {
                $skipped++;
            }

            if (!$user->is_active) {
                $user->is_active = true;
                $user->save();
                $activated++;
                $this->info("Активирован пользователь {$user->id}");
            }

            $progressBar->advance();
        }
        $progressBar->finish();

        // ==================== 6. ИТОГИ ====================
        $this->info('Миграция завершена!');
        $this->table(
            ['Этап', 'Результат'],
            [
                ['Объединение сезонов', 'Выполнено'],
                ['Турниры в Белгороде', Tournament::where('city_id', $belgorod->id)->count() . ' турниров'],
                ['Турниры в Воронеже', Tournament::where('city_id', $voronezh->id)->count() . ' турниров'],
                ['Обращения в Белгороде', Feedback::where('city_id', $belgorod->id)->count() . ' обращений'],
                ['Обращения в Воронеже', Feedback::where('city_id', $voronezh->id)->count() . ' обращений'],
                ['Создано user_credentials', $created],
                ['Пропущено user_credentials', $skipped],
                ['Активировано пользователей', $activated],
            ]
        );

        return 0;
    }
}