<?php

namespace App\Repositories;

use App\Models\EmailVerification;
use Illuminate\Support\Carbon;

class EmailVerificationRepository
{
    public function createOrUpdate(string $email, string $code, int $minutes = 15): EmailVerification
    {
        return EmailVerification::updateOrCreate(
            ['email' => $email],
            ['code' => $code, 'expires_at' => Carbon::now()->addMinutes($minutes)]
        );
    }

    public function findValid(string $email, string $code): ?EmailVerification
    {
        return EmailVerification::where('email', $email)
            ->where('code', $code)
            ->where('expires_at', '>', Carbon::now())
            ->first();
    }

    public function delete(EmailVerification $verification): void
    {
        $verification->delete();
    }

    public function deleteByEmail(string $email): void
    {
        EmailVerification::where('email', $email)->delete();
    }
}