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
                'name' => $this->user->name,
            ],
            'token' => $this->token,
        ];
    }
}
