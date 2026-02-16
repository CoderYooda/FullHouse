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
    ){
        parent::__construct(null);
    }

    public function toArray(Request $request): array
    {
        $lateRegistration = explode(':', $this->tournament->late_registration);
        $registration = explode(':', $this->tournament->start_at);

        $atDate = $this->tournament->event_date->addHours((int)$registration[0]);
        $atDate = $atDate->addMinutes((int)$registration[1]);

        return [
            'id' => $this->tournament->id,
            'title' => $this->tournament->title,
            'date' => $this->tournament->event_date->translatedFormat('j F, l'),
            'at' => $this->tournament->start_at,
            'at_date' => $atDate,
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
            'start_at' => $this->tournament->start_at,
            'types' => $this->tournament->types,
            'free_entry' => $this->tournament->free_entry,
            'without_re_entry' => $this->tournament->without_re_entry,
            'without_add_on' => $this->tournament->without_add_on,
            'description' => $this->tournament->description,
            'participant_count' => $this->tournament->users()->where('participants.is_actual', true)->count(),
            'participant' => $this->tournament->users()
                ->where('participants.is_actual', true)
                ->pluck('id')
                ->contains($request->user()->id),
        ];
    }
}
