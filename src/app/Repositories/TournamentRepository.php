<?php

namespace App\Repositories;

use App\Models\Tournament;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;

class TournamentRepository
{
    public function getTournament(int $tournament_id): Tournament
    {
        return Tournament::findOrFail($tournament_id);
    }

    public function getSortedActualPlayers($tournament_id)
    {
        return Tournament::find($tournament_id)
            ->users()
            ->wherePivot('is_actual', true)
            ->orderBy('pivot_serial_number')
            ->with('telegramUser')
            ->get();
    }

    public function getUpcomingTournaments(int $cityId): Collection
    {
        return Tournament::query()
            ->whereDate('event_date', '>=', Carbon::today())
            ->where('is_actual', true)
            ->where('city_id', $cityId)
            ->orderBy('event_date')
            ->get();
    }

    public function getUserUpcomingTournaments(int $userId): Collection
    {
        return Tournament::query()
            ->whereDate('event_date', '>=', Carbon::today())
            ->where('is_actual', true)
            ->whereHas('users', function ($query) use ($userId) {
                $query->where('user_id', $userId)
                    ->where('is_actual', true);
            })
            ->orderBy('event_date')
            ->get();
    }

}