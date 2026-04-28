<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\User;
use App\Models\TelegramUser;
use App\Models\EmailVerification;
use App\Models\UserCredential;
use App\Service\UserMergeService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

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
//            'company_id' => 'required|exists:companies,id',
        ]);

        $user = User::create([
            'name' => $request->name,
            'public_name' => $request->public_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'agreement' => true,
//            'company_id' => $request->company_id,
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
        $this->validateTelegramHash($request);
        $telegramId = $request->input('id');

        // Ищем существующую запись в user_credentials
        $credential = UserCredential::where('provider', 'telegram')
            ->where('provider_uid', $telegramId)
            ->first();

        if ($credential) {
            // Запись есть – используем связанного пользователя
            $user = $credential->user;
            if (!$user->is_active) {
                // Если пользователь был деактивирован (слит), активируем его
                $user->is_active = true;
                $user->save();
            }
        } else {
            // Нет записи – создаём нового пользователя
            $companySlug = $request->input('company_slug');
            $company = Company::where('slug', $companySlug)->firstOrFail();

            $telegramUser = TelegramUser::create([
                'telegram_id' => $telegramId,
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'username' => $request->input('username'),
                'language_code' => $request->input('language_code'),
                'allows_write_to_pm' => true,
            ]);

            $user = User::create([
                'name' => $request->input('first_name', ''),
                'public_name' => $request->input('username', ''),
                'email' => $telegramId . '@telegram.com',
                'password' => Hash::make('123456'),
                'company_id' => $company->id,
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
        return true;

//        $bot_token = config('services.telegram.bot_token');
//        $data_check_arr = $request->except('hash');
//        ksort($data_check_arr);
//        $data_check_string = http_build_query($data_check_arr);
//        $secret_key = hash('sha256', $bot_token, true);
//        $hash = hash_hmac('sha256', $data_check_string, $secret_key);
//        if ($hash !== $request->input('hash')) {
//            abort(403, 'Неверные данные Telegram');
//        }
    }
}