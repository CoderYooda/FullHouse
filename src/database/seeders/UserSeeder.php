<?php

namespace Database\Seeders;

use App\Models\Tournament;
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

        $user1 = User::create([
            'name' => 'Mihail',
            'is_admin' => 0,
            'public_name' => 'Mihail',
            'telegram_user_id' => 2,
            'email' => 'Mihail@telegram.com',
            'password' => Hash::make('123123'),
            'agreement' => true,
        ]);
        $user2 = User::create([
            'name' => 'Vlad',
            'is_admin' => 0,
            'public_name' => 'Vlad',
            'telegram_user_id' => 3,
            'email' => 'Vlad@telegram.com',
            'password' => Hash::make('123123'),
            'agreement' => true,
        ]);
        $user3 = User::create([
            'name' => 'CoderYooda',
            'is_admin' => 0,
            'public_name' => 'CoderYooda',
            'telegram_user_id' => 1,
            'email' => 'CoderYooda@telegram.com',
            'password' => Hash::make('FHPC323232'),
            'agreement' => true,
        ]);
        $user4 = User::create([
            'name' => 'Dmitri',
            'is_admin' => 0,
            'public_name' => 'Dmitri',
            'telegram_user_id' => 4,
            'email' => 'Dmitri@telegram.com',
            'password' => Hash::make('123123'),
            'agreement' => true,
        ]);

        $tournament = Tournament::first();

        $users = [$user1, $user2, $user4];

        $tournament->users()->attach($users);

        $counter = 1;
        foreach ($users as $user) {
            $actualUser = $tournament->users->where('id', $user->id)->first();

            if ($actualUser) {
                $actualUser->pivot->serial_number = $counter;
                $actualUser->pivot->save();

                $counter++;
            }
        }

    }
}
