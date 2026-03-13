<?php

namespace App\Repositories;

use App\Models\Tournament;
use App\Models\User;

class TournamentRepository
{
    public function getSortedActualPlayers($tournament_id)
    {
        return Tournament::find($tournament_id)
            ->users()
            ->wherePivot('is_actual', true)
            ->orderBy('pivot_serial_number')
            ->with('telegramUser')
            ->get();
    }
}