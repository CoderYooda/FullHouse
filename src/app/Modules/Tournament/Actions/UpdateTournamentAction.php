<?php

namespace App\Modules\Tournament\Actions;

use App\Models\Tournament;
use App\Modules\Tournament\DTO\UpdateTournamentDTO;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class UpdateTournamentAction
{
    public function handle(UpdateTournamentDTO $updateTournamentDTO): Tournament
    {
        $tournament = Tournament::query()
            ->where('id', $updateTournamentDTO->tournamentId)
            ->first();

        if (!$tournament) {
            $tournament = new Tournament();
        }
        $tournament->title = $updateTournamentDTO->title;
        $tournament->stack = $updateTournamentDTO->stack;
        $tournament->levels_start = $updateTournamentDTO->levels_start;
        $tournament->levels_end = $updateTournamentDTO->levels_end;
        $tournament->small_blind = $updateTournamentDTO->small_blind;
        $tournament->big_blind = $updateTournamentDTO->big_blind;
        $tournament->ante = $updateTournamentDTO->ante;
        $tournament->buy_in = $updateTournamentDTO->buy_in;
        $tournament->re_entry = $updateTournamentDTO->re_entry;
        $tournament->add_on = $updateTournamentDTO->add_on;
        $tournament->event_date = $updateTournamentDTO->event_date;
        $tournament->start_at = $updateTournamentDTO->start_at;
        $tournament->late_registration = $updateTournamentDTO->late_registration;
        $tournament->free_entry = $updateTournamentDTO->free_entry;
        $tournament->without_re_entry = $updateTournamentDTO->without_re_entry;
        $tournament->without_add_on = $updateTournamentDTO->without_add_on;
        $tournament->is_private = $updateTournamentDTO->is_private;
        $tournament->is_actual = $updateTournamentDTO->is_actual;
        $tournament->description = 'deprecated';
        $tournament->season_id = $updateTournamentDTO->season;
        $tournament->save();

        $tournament->types()->sync($updateTournamentDTO->types);

        return $tournament;
    }
}
