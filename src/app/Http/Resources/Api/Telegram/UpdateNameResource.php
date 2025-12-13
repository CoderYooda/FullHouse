<?php

namespace App\Http\Resources\Api\Telegram;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UpdateNameResource extends JsonResource
{
    public function __construct(
        private readonly User $user,
    ){
        parent::__construct(null);
    }

    public function toArray(Request $request): array
    {
        return [
            'name' => $this->user->public_name,
        ];
    }
}
