<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\TelegramUser;
use App\Models\EmailVerification;
use App\Models\UserCredential;
use App\Service\UserMergeService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8|confirmed',
            'name' => 'required|string|max:255',
            'public_name' => 'required|string|max:255',
            'agreement' => 'accepted',
        ]);

        $user = User::create([
            'name' => $request->name,
            'public_name' => $request->public_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'agreement' => true,
            'is_active' => true,
        ]);

        $user->credentials()->create([
            'provider' => 'email',
            'provider_uid' => $request->email,
        ]);

        $code = random_int(100000, 999999);
        EmailVerification::updateOrCreate(
            ['email' => $request->email],
            ['code' => $code, 'expires_at' => now()->addMinutes(15)]
        );

        Mail::raw("Ваш код подтверждения: $code", function ($message) use ($request) {
            $message->to($request->email)->subject('Подтверждение email');
        });

        return response()->json(['message' => 'Код подтверждения отправлен']);
    }

    public function verifyEmail(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'code' => 'required|string|size:6'
        ]);

        $verification = EmailVerification::where('email', $request->email)
            ->where('code', $request->code)
            ->where('expires_at', '>', now())
            ->firstOrFail();

        $user = User::where('email', $request->email)->firstOrFail();
        $user->email_verified_at = now();
        $user->save();
        $verification->delete();

        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json(['token' => $token, 'user' => $user]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Неверные данные'], 401);
        }
        if (!$user->email_verified_at) {
            return response()->json(['message' => 'Email не подтверждён'], 403);
        }

        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json(['token' => $token, 'user' => $user]);
    }

    public function telegramLogin(Request $request)
    {
        \Log::info('Full request data', $request->all());
        // Временно отключаем проверку хеша для теста
         $this->validateTelegramHash($request);

        $telegramId = $request->input('id');

        // Ищем существующую запись в user_credentials
        $credential = UserCredential::where('provider', 'telegram')
            ->where('provider_uid', $telegramId)
            ->first();

        if ($credential) {
            $user = $credential->user;
            if (!$user->is_active) {
                $user->is_active = true;
                $user->save();
            }
        } else {
            // Создаём TelegramUser
            $telegramUser = TelegramUser::create([
                'telegram_id' => $telegramId,
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'username' => $request->input('username'),
                'language_code' => $request->input('language_code'),
                'allows_write_to_pm' => true,
                'photo_url' => $request->input('photo_url'),
            ]);

            $user = User::create([
                'name' => $request->input('first_name', ''),
                'public_name' => $request->input('username', ''),
                'email' => $telegramId . '@telegram.com',
                'password' => Hash::make('123456'),
                'is_active' => true,
                'telegram_user_id' => $telegramUser->id,
            ]);

            $user->credentials()->create([
                'provider' => 'telegram',
                'provider_uid' => $telegramId,
                'provider_data' => ['username' => $request->input('username')],
            ]);
        }

        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json(['token' => $token, 'user' => $user]);
    }

    public function linkTelegram(Request $request)
    {
        $this->validateTelegramHash($request);
        $telegramId = $request->input('id');
        $currentUser = $request->user();

        if ($currentUser->credentials()->where('provider', 'telegram')->where('provider_uid', $telegramId)->exists()) {
            return response()->json(['message' => 'Telegram уже привязан'], 400);
        }

        $telegramUser = TelegramUser::where('telegram_id', $telegramId)->first();
        $sourceUser = $telegramUser ? $telegramUser->user : null;
        $mergeService = new UserMergeService();

        if ($sourceUser && $sourceUser->is_active && $sourceUser->id !== $currentUser->id) {
            $mergeService->merge($sourceUser, $currentUser, 'link_telegram_to_web', $request->resolved_city_id ?? null);
            return response()->json(['message' => 'Аккаунты объединены']);
        } else {
            if (!$telegramUser) {
                $telegramUser = TelegramUser::create([
                    'telegram_id' => $telegramId,
                    'first_name' => $request->input('first_name'),
                    'last_name' => $request->input('last_name'),
                    'username' => $request->input('username'),
                    'language_code' => $request->input('language_code'),
                    'allows_write_to_pm' => true,
                ]);
            }
            $currentUser->telegram_user_id = $telegramUser->id;
            $currentUser->save();

            $currentUser->credentials()->create([
                'provider' => 'telegram',
                'provider_uid' => $telegramId,
                'provider_data' => ['username' => $request->input('username')],
            ]);

            return response()->json(['message' => 'Telegram привязан']);
        }
    }

    public function unlinkTelegram(Request $request)
    {
        $user = $request->user();
        $user->credentials()->where('provider', 'telegram')->delete();
        $user->telegram_user_id = null;
        $user->save();
        return response()->json(['message' => 'Telegram отвязан']);
    }

    public function me(Request $request)
    {
        return $request->user();
    }

    protected function validateTelegramHash(Request $request)
    {
        $bot_token = config('services.telegram.bot_token');
        $data = $request->all();

        if (!isset($data['hash'])) {
            abort(403, 'Hash not found');
        }

        $hash = $data['hash'];
        unset($data['hash']);

        // Сортируем по ключам в алфавитном порядке
        ksort($data);

        // Формируем строку для проверки
        $data_check_arr = [];
        foreach ($data as $key => $value) {
            $data_check_arr[] = $key . '=' . $value;
        }
        $data_check_string = implode("\n", $data_check_arr);

        // Вычисляем хеш
        $secret_key = hash('sha256', $bot_token, true);
        $calculated_hash = hash_hmac('sha256', $data_check_string, $secret_key);

        // Логируем для отладки
        Log::info('Telegram hash debug', [
            'data_check_string' => $data_check_string,
            'calculated' => $calculated_hash,
            'received' => $hash,
            'bot_token' => $bot_token,
        ]);

        if (!hash_equals($calculated_hash, $hash)) {
            abort(403, $calculated_hash . '<br>' . '<br>' . '<br>' . $hash);
        }

        return true;
    }
}