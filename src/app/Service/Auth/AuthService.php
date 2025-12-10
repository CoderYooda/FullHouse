<?php

namespace App\Service\Auth;

use App\Models\User;
use App\Service\Auth\DTO\CreateUserDTO;

class AuthService
{
    public function getOrCreateUser(CreateUserDTO $createUserDTO): User
    {
        $user = User::where('name', $createUserDTO->login)->first();

        if (!$user) {
            $user = new User();
            $user->name = $createUserDTO->login;
            $user->email = $createUserDTO->login . '@telegram.com';
            $user->password = '123456';

            $user->save();
        }


        return $user;
    }
}
