<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Season;

class SeasonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Season::create([
            'name' => 'Тестовый сезон',
            'start_date' => '2026-03-15',
            'end_date' => Carbon::now()->addMonth(),
        ]);
    }
}
