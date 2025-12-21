<?php

namespace App\Http\Resources\Tournament;

use App\Models\Tournament;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TournamentResource extends JsonResource
{
    public function __construct(
        private readonly Tournament $tournament,
        private readonly bool $participant,
    ){
        parent::__construct(null);
    }

    public function toArray(Request $request): array
    {
        $lateRegistration = explode(':', $this->tournament->late_registration);
        return [
            'id' => $this->tournament->id,
            'title' => $this->tournament->title
                . ', ' . $this->tournament->event_date->translatedFormat('d F, l')
                . ' в ' . $this->tournament->start_at,
            'stack' => $this->tournament->stack,
            'small_blind' => $this->tournament->small_blind,
            'big_blind' => $this->tournament->big_blind,
            'ante' => $this->tournament->ante,
            'buy_in' => $this->tournament->buy_in,
            're_entry' => $this->tournament->re_entry,
            'add_on' => $this->tournament->add_on,
            'levels_start' => $this->tournament->levels_start,
            'levels_end' => $this->tournament->levels_end,
            'late_registration' => $lateRegistration[0] .':' . $lateRegistration[1],
            'is_private' => $this->tournament->is_private,
            'description' => $this->tournament->description,
            'participant' => $this->tournament->users()
                ->where('participants.is_actual', true)
                ->pluck('id')
                ->contains($request->user()->id),
        ];
    }
}
