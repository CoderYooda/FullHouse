<?php

namespace App\Service\Auth;

use App\Models\User;
use App\Repositories\CredentialRepository;

class CredentialService
{
    public function __construct(
        protected CredentialRepository $credentialRepository,
    ) {}

    public function addEmailCredential(User $user, string $email): void
    {
        $this->credentialRepository->updateOrCreate(
            $user,
            ['provider' => 'email'],
            ['provider_uid' => $email]
        );
    }

    public function addTelegramCredential(User $user, int $telegramId, string $username): void
    {
        $this->credentialRepository->updateOrCreate(
            $user,
            ['provider' => 'telegram'],
            [
                'provider_uid' => $telegramId,
                'provider_data' => ['username' => $username],
            ]
        );
    }

    public function removeTelegramCredential(User $user): void
    {
        $this->credentialRepository->deleteByProvider($user, 'telegram');
        $user->telegram_user_id = null;
        $user->save();
    }
}