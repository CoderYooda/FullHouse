<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Service\User\UserService;
use App\Service\Telegram\TelegramService;
use App\Service\EmailVerification\EmailVerificationService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    public function __construct(
        private readonly UserService $userService,
        private readonly TelegramService $telegramService,
        private readonly EmailVerificationService $emailVerificationService
    ) {}

    public function register(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8|confirmed',
            'name' => 'required|string|max:255',
            'public_name' => 'required|string|max:255',
            'agreement' => 'accepted',
        ]);

        try {
            $this->userService->registerWithEmail($validated);
            return response()->json(['message' => 'Код подтверждения отправлен']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Ошибка при регистрации'], 500);
        }
    }

    public function verifyEmail(Request $request): JsonResponse
    {
        $request->validate([
            'email' => 'required|email',
            'code' => 'required|string|size:6'
        ]);

        $user = $this->userService->verifyEmail($request->email, $request->code);

        if (!$user) {
            return response()->json(['message' => 'Неверный код'], 400);
        }

        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json(['token' => $token, 'user' => $user]);
    }

    public function login(Request $request): JsonResponse
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = $this->userService->login($request->email, $request->password);

        if (!$user) {
            return response()->json(['message' => 'Неверные данные или email не подтверждён'], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json(['token' => $token, 'user' => $user]);
    }

    public function telegramLogin(Request $request): JsonResponse
    {
        $botToken = config('services.telegram.bot_token');

        if (!$this->telegramService->validateTelegramHash($request->all(), $botToken)) {
            return response()->json(['message' => 'Неверные данные Telegram'], 401);
        }

        $user = $this->telegramService->loginOrRegisterViaTelegram($request->all());
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['token' => $token, 'user' => $user]);
    }

    public function linkTelegram(Request $request): JsonResponse
    {
        $botToken = config('services.telegram.bot_token');

        if (!$this->telegramService->validateTelegramHash($request->all(), $botToken)) {
            return response()->json(['message' => 'Неверные данные Telegram'], 401);
        }

        $user = $this->userService->getAuthenticatedUser();

        $result = $this->telegramService->linkTelegramToUser(
            $user,
            $request->all(),
            $request->input('resolved_city_id')
        );

        return response()->json($result);
    }


    public function unlinkTelegram(Request $request): JsonResponse
    {
        $user = $this->userService->getAuthenticatedUser();
        $this->telegramService->unlinkTelegram($user);
        return response()->json(['message' => 'Telegram отвязан']);
    }

    public function linkEmail(Request $request): JsonResponse
    {
        $request->validate([
            'email' => 'required|email|unique:users,email',
        ]);

        $user = $this->userService->getAuthenticatedUser();

        if (!$this->userService->isTelegramGeneratedUser($user)) {
            return response()->json(['message' => 'Email уже привязан'], 400);
        }

        $this->emailVerificationService->generateAndSend($request->email, 'Привязка email');

        return response()->json(['message' => 'Код отправлен']);
    }

    public function verifyLinkEmail(Request $request): JsonResponse
    {
        $request->validate([
            'email' => 'required|email',
            'code' => 'required|string|size:6',
            'password' => 'required|min:8|confirmed',
        ]);

        $user = $this->userService->getAuthenticatedUser();

        if (!$this->userService->isTelegramGeneratedUser($user)) {
            return response()->json(['message' => 'Email уже привязан'], 400);
        }

        $success = $this->userService->linkEmailToTelegramUser(
            $user,
            $request->email,
            $request->password,
            $request->code
        );

        if (!$success) {
            return response()->json(['message' => 'Неверный код'], 400);
        }

        return response()->json(['message' => 'Email привязан']);
    }
}