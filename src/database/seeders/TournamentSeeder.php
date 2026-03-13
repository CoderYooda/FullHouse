<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Tournament;

class TournamentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Tournament::create([
            'title' => 'Тестовый турнир',
            'description' => 'deprecated',
            'is_ended' => false,
            'created_at' => '2026-03-10 18:08:28',
            'updated_at' => '2026-03-10 18:08:28',
            'type' => 'classic',
            'stack' => 25000,
            'small_blind' => 100,
            'big_blind' => 100,
            'ante' => 100,
            'buy_in' => 650,
            're_entry' => 650,
            'add_on' => 650,
            'levels_start' => 10,
            'levels_end' => 20,
            'late_registration' => '21:00:00',
            'is_private' => false,
            'event_date' => '2026-03-18',
            'is_actual' => true,
            'start_at' => '19:00:00',
            'free_entry' => false,
            'without_re_entry' => false,
            'without_add_on' => false,
            'season_id' => 1,
            'company_id' => 1,
        ]);
    }
}
