<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\TelegramUser;

class TelegramUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TelegramUser::create([
            'telegram_id' => '1269912109',
            'first_name' => 'Сергей',
            'last_name' => 'Сенаторов',
            'username' => 'CoderYooda',
            'language_code' => 'ru',
            'allows_write_to_pm' => true,
            'photo_url' => 'https://t.me/i/userpic/320/4Ibo9h0jE4a39r-pfAxX2DWy6ZlNY_6FQSXPyWev1Zs.svg',
        ]);
        TelegramUser::create([
            'telegram_id' => '1269912109',
            'first_name' => 'Михаил',
            'last_name' => 'Сенаторов',
            'username' => 'CoderYooda',
            'language_code' => 'ru',
            'allows_write_to_pm' => true,
            'photo_url' => 'https://t.me/i/userpic/320/4Ibo9h0jE4a39r-pfAxX2DWy6ZlNY_6FQSXPyWev1Zs.svg',
        ]);
        TelegramUser::create([
            'telegram_id' => '1269912109',
            'first_name' => 'Влад',
            'last_name' => 'Сенаторов',
            'username' => 'CoderYooda',
            'language_code' => 'ru',
            'allows_write_to_pm' => true,
            'photo_url' => 'https://t.me/i/userpic/320/4Ibo9h0jE4a39r-pfAxX2DWy6ZlNY_6FQSXPyWev1Zs.svg',
        ]);
        TelegramUser::create([
            'telegram_id' => '1269912109',
            'first_name' => 'Дмитрий',
            'last_name' => 'Сенаторов',
            'username' => 'CoderYooda',
            'language_code' => 'ru',
            'allows_write_to_pm' => true,
            'photo_url' => 'https://t.me/i/userpic/320/4Ibo9h0jE4a39r-pfAxX2DWy6ZlNY_6FQSXPyWev1Zs.svg',
        ]);



    }
}
