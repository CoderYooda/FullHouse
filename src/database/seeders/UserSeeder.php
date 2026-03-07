<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Administrator',
            'public_name' => 'Admin',
            'email' => 'test@example.com',
            'password' => Hash::make('FHPC313131'),
        ]);

        User::create([
            'name' => 'CoderYooda',
            'is_admin' => 0,
            'public_name' => 'CoderYooda',
            'telegram_user_id' => 1,
            'email' => 'CoderYooda@telegram.com',
            'password' => Hash::make('FHPC323232'),
            'agreement' => true,
        ]);
//        User::create([
//            'name' => 'Mihail',
//            'is_admin' => 0,
//            'public_name' => 'Mihail',
//            'telegram_user_id' => 2,
//            'email' => 'Mihail@telegram.com',
//            'password' => Hash::make('123123'),
//            'agreement' => true,
//        ]);
//        User::create([
//            'name' => 'Vlad',
//            'is_admin' => 0,
//            'public_name' => 'Vlad',
//            'telegram_user_id' => 2,
//            'email' => 'Vlad@telegram.com',
//            'password' => Hash::make('123123'),
//            'agreement' => true,
//        ]);
//        User::create([
//            'name' => 'Dmitri',
//            'is_admin' => 0,
//            'public_name' => 'Dmitri',
//            'telegram_user_id' => 2,
//            'email' => 'Dmitri@telegram.com',
//            'password' => Hash::make('123123'),
//            'agreement' => true,
//        ]);

    }
}
