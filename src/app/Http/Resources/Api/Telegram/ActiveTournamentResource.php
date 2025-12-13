<?php

namespace App\Http\Resources\Api\Telegram;

use App\Models\Tournament;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ActiveTournamentResource extends JsonResource
{
    public function __construct(
        private readonly Tournament $tournament,
        private readonly bool $participant,
    ){
        parent::__construct(null);
    }

    public function toArray(Request $request): array
    {
        return [
            'title' => $this->tournament->title,
            'description' => $this->tournament->description,
            'participant' => $this->participant,
        ];
    }
}
