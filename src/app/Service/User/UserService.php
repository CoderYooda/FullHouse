<?php

namespace App\Service\User;

use App\Models\User;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;

class UserService
{
    public function getAuthenticatedUser(): User
    {
        $user = auth()->user();

        if (!$user instanceof User) {
            throw new HttpResponseException(
                response()->json(['message' => 'User not authenticated'], 401)
            );
        }

        return $user;
    }
}
