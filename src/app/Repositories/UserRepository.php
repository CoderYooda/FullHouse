<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

class UserRepository
{
    public function create(array $data): User
    {
        return User::create($data);
    }

    public function update(int $userId, array $data): bool
    {
        return User::where('id', $userId)->update($data);
    }

    public function find(int $userId): ?User
    {
        return User::find($userId);
    }

    public function findByEmail(string $email): ?User
    {
        return User::where('email', $email)->first();
    }

    public function findByTelegramUserId(int $telegramUserId): ?User
    {
        return User::where('telegram_user_id', $telegramUserId)->first();
    }

    public function deleteUnverifiedByEmail(string $email): void
    {
        User::where('email', $email)
            ->whereNull('email_verified_at')
            ->delete();
    }

    public function verifyEmail(int $userId): void
    {
        User::where('id', $userId)->update(['email_verified_at' => now()]);
    }

    public function all(): Collection
    {
        return User::all();
    }

    public function updatePublicName(int $userId, string $publicName): bool
    {
        return User::where('id', $userId)->update(['public_name' => $publicName]);
    }
}