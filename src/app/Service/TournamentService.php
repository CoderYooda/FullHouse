<?php

namespace App\Service;

use App\Models\User;
use App\Models\Tournament;

use Carbon\Carbon;

class TournamentService
{
    public function recalculationOrderPlayers($users): void
    {
        $counter = 1;

        foreach ($users as $user) {
            $user->pivot->serial_number = $counter;
            $user->pivot->save();

            $counter++;
        }

    }

    public function addParticipant(Tournament $tournament, User $user): void
    {
        $participant = $tournament->users()->where('user_id', $user->id)->first();

        if ($participant) {
            $participant->pivot->is_actual = true;
            $participant->pivot->save();
        } else {
            $tournament->users()->attach($user->id, ['created_at' => Carbon::now()]);
        }
    }

    public function removeParticipant(Tournament $tournament, User $user): void
    {
        $tournament->users()->updateExistingPivot($user->id, [
            'is_actual' => false,
            'serial_number' => null
        ]);
    }
}