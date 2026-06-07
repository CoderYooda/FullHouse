<?php

namespace App\Repositories;

use App\Models\UserCredential;

class CredentialRepository
{
    public function createForUser(int $userId, string $provider, string $providerUid, ?array $providerData = null): UserCredential
    {
        return UserCredential::create([
            'user_id' => $userId,
            'provider' => $provider,
            'provider_uid' => $providerUid,
            'provider_data' => $providerData,
        ]);
    }

    public function findByProvider(string $provider, string $providerUid): ?UserCredential
    {
        return UserCredential::where('provider', $provider)
            ->where('provider_uid', $providerUid)
            ->first();
    }

    public function findByUserAndProvider(int $userId, string $provider): ?UserCredential
    {
        return UserCredential::where('user_id', $userId)
            ->where('provider', $provider)
            ->first();
    }

    public function updateOrCreateForUser(int $userId, string $provider, string $providerUid, ?array $providerData = null): UserCredential
    {
        return UserCredential::updateOrCreate(
            ['user_id' => $userId, 'provider' => $provider],
            ['provider_uid' => $providerUid, 'provider_data' => $providerData]
        );
    }

    public function deleteByProvider(int $userId, string $provider): void
    {
        UserCredential::where('user_id', $userId)
            ->where('provider', $provider)
            ->delete();
    }

    public function existsForUser(int $userId, string $provider): bool
    {
        return UserCredential::where('user_id', $userId)
            ->where('provider', $provider)
            ->exists();
    }
}