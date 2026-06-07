<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Artisan;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            CompanySeeder::class,
            SeasonSeeder::class,
            TournamentSeeder::class,
//            TelegramUserSeeder::class,
//            UserSeeder::class,
        ]);

        // Запускаем миграцию credentials после всех сидов
        Artisan::call('users:migrate-credentials');
    }
}
