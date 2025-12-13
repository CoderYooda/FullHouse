<?php

namespace App\Http\Resources\Api\Telegram;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AuthTelegramResource extends JsonResource
{
    public function __construct(
        private readonly User $user,
        private readonly string $token,
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
            ],
            'token' => $this->token,
        ];
    }
}
