<?php

namespace App\Service\EmailVerification;

use App\Repositories\EmailVerificationRepository;
use Illuminate\Support\Facades\Mail;

class EmailVerificationService
{
    public function __construct(
        protected readonly EmailVerificationRepository $repository
    ) {}

    public function generateAndSend(string $email, string $subject = 'Подтверждение email'): void
    {
        $code = random_int(100000, 999999);
        $this->repository->createOrUpdate($email, $code);

        Mail::raw("Ваш код подтверждения: $code", function ($message) use ($email, $subject) {
            $message->to($email)->subject($subject);
        });
    }

    public function verify(string $email, string $code): bool
    {
        $verification = $this->repository->findValid($email, $code);

        if (!$verification) {
            return false;
        }

        $this->repository->delete($verification);
        return true;
    }
}