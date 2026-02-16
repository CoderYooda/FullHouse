<?php

namespace App\Service\Auth\DTO;

use App\Models\TelegramUser;

class CreateUserDTO
{
    public function __construct(
        public readonly TelegramUser $telegramUser,
        public readonly int $companyId,
    ){
    }
}
