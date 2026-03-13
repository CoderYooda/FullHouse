<?php

namespace App\Service;

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
}