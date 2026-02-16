<?php

namespace App\Service\Auth;

use App\Models\User;
use App\Service\Auth\DTO\CreateUserDTO;

class AuthService
{
    public function getOrCreateUser(CreateUserDTO $createUserDTO): User
    {
        $user = User::where('telegram_user_id', $createUserDTO->telegramUser->id)->first();

        if (!$user) {
            $user = new User();
            $user->telegram_user_id = $createUserDTO->telegramUser->id;
            $user->name = $createUserDTO->telegramUser->username;
            $user->public_name = $createUserDTO->telegramUser->username;
            $user->email = $createUserDTO->telegramUser->username . '@telegram.com';
            $user->password = '123456';
            $user->company_id = $createUserDTO->companyId;

            $user->save();
        }

        return $user;
    }
}
