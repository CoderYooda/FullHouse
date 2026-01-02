<?php

namespace App\Http\Controllers;

use App\Http\Resources\Api\Player\PlayerResource;
use App\Http\Resources\Tournament\TournamentCollectionResource;
use App\Models\Tournament;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class PlayerController extends Controller
{
    public function getPlayer(): PlayerResource
    {
        /** @var User $player */
        $player = auth()->user();

        return new PlayerResource($player);
    }

    public function getTournaments(Request $request): TournamentCollectionResource
    {
        $tournaments = Tournament::query()
            ->whereHas('users', function ($query) {
                $query->where('is_actual', true);
            })
            ->where('event_date', '>', Carbon::now()->startOfDay())
            ->get();


        return new TournamentCollectionResource($tournaments);
    }
}
