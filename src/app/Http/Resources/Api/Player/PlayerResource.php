<?php

namespace App\Http\Resources\Api\Player;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PlayerResource extends JsonResource
{
    public function __construct(
        private readonly User $user,
    ){
        parent::__construct(null);
    }

    public function toArray(Request $request): array
    {
        return [
            'user' => [
                'public_name' => $this->user->public_name,
                'pic' => $this->user->telegramUser?->photo_url,
                'first_name' => $this->user->telegramUser?->first_name,
                'last_name' => $this->user->telegramUser?->last_name,
                'registration_date' => $this->user->created_at->translatedFormat('d F Y'),
                'profile_id' => '#0_'. 382 * $this->user->id,
                'agreement' => $this->user->agreement,
            ],
        ];
    }
}
