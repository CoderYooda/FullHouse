<?php

namespace App\Http\Controllers;

use App\Http\Resources\Api\Player\PlayerResource;
use App\Http\Resources\Tournament\TournamentCollectionResource;
use App\Models\Tournament;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PlayerController extends Controller
{
    public function getPlayer(): PlayerResource
    {
        /** @var User $player */
        $player = auth()->user();

        return new PlayerResource($player);
    }

    public function acceptAgreement(): JsonResponse
    {
        /** @var User $player */
        $player = auth()->user();
        $player->agreement = true;
        $player->save();

        return new JsonResponse([
            'success' => true,
        ]);
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
