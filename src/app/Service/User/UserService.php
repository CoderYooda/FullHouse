<?php

namespace App\Service\User;

use App\Models\User;
use App\Repositories\UserRepository;
use App\Repositories\CredentialRepository;
use App\Service\EmailVerification\EmailVerificationService;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;

class UserService
{
    public function __construct(
        protected readonly UserRepository $userRepository,
        protected readonly CredentialRepository $credentialRepository,
        protected readonly EmailVerificationService $emailVerificationService
    ) {}

    public function getAuthenticatedUser(): User
    {
        $user = Auth::user();

        if (!$user instanceof User) {
            throw new HttpResponseException(
                response()->json(['message' => 'User not authenticated'], 401)
            );
        }

        return $user;
    }

    public function registerWithEmail(array $data): User
    {
        return DB::transaction(function () use ($data) {
            $this->userRepository->deleteUnverifiedByEmail($data['email']);

            $user = $this->userRepository->create([
                'name' => $data['name'],
                'public_name' => $data['public_name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
                'agreement' => false,
                'is_active' => true,
            ]);

            $this->credentialRepository->createForUser($user->id, 'email', $data['email']);
            $this->emailVerificationService->generateAndSend($data['email']);

            return $user;
        });
    }

    public function verifyEmail(string $email, string $code): ?User
    {
        if (!$this->emailVerificationService->verify($email, $code)) {
            return null;
        }

        $user = $this->userRepository->findByEmail($email);
        if (!$user) {
            return null;
        }

        $this->userRepository->verifyEmail($user->id);

        return $user->fresh();
    }

    public function login(string $email, string $password): ?User
    {
        $user = $this->userRepository->findByEmail($email);

        if (!$user || !Hash::check($password, $user->password)) {
            return null;
        }

        if (!$user->email_verified_at) {
            return null;
        }

        return $user;
    }

    public function linkEmailToTelegramUser(User $user, string $email, string $password, string $code): bool
    {
        if (!$this->emailVerificationService->verify($email, $code)) {
            return false;
        }

        return DB::transaction(function () use ($user, $email, $password) {
            $this->userRepository->update($user->id, [
                'email' => $email,
                'password' => Hash::make($password),
                'email_verified_at' => now(),
            ]);

            $this->credentialRepository->updateOrCreateForUser($user->id, 'email', $email);

            return true;
        });
    }

    public function isTelegramGeneratedUser(User $user): bool
    {
        return str_contains($user->email, '@telegram.com');
    }

    public function updatePublicName(int $userId, string $publicName): User
    {
        $this->userRepository->updatePublicName($userId, $publicName);

        $user = $this->userRepository->find($userId);

        if (!$user) {
            throw new HttpResponseException(
                response()->json(['message' => 'User not found'], 404)
            );
        }

        return $user;
    }
}