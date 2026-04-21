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
            $user->is_active = true;
            $user->save();

            // Добавляем запись в user_credentials
            $user->credentials()->create([
                'provider' => 'telegram',
                'provider_uid' => $createUserDTO->telegramUser->telegram_id,
                'provider_data' => ['username' => $createUserDTO->telegramUser->username],
            ]);
        } else {
            // Для старых пользователей создаём credential, если нет
            if (!$user->credentials()->where('provider', 'telegram')->exists()) {
                $user->credentials()->create([
                    'provider' => 'telegram',
                    'provider_uid' => $createUserDTO->telegramUser->telegram_id,
                    'provider_data' => ['username' => $createUserDTO->telegramUser->username],
                ]);
            }
        }

        return $user;
    }
}
