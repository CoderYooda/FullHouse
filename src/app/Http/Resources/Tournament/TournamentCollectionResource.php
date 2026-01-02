<?php

namespace App\Http\Resources\Tournament;

use App\Models\Tournament;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Collection;

class TournamentCollectionResource extends JsonResource
{
    public function __construct(
        private readonly Collection $tournaments,
    ){
        parent::__construct(null);
    }

    public function toArray(Request $request): array
    {
        $tournaments = [];
        foreach ($this->tournaments as $tournament) {
            $tournaments[] = (new TournamentResource($tournament))->toArray($request);
        }

        return $tournaments;
    }
}
