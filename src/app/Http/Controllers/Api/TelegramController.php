<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\Telegram\AuthTelegramResource;
use App\Http\Resources\Api\Telegram\UpdateNameResource;
use App\Models\TelegramUser;
use App\Modules\Telegram\Domain\Actions\CreateTelegramUserAction;
use App\Modules\Telegram\Domain\Actions\UpdateTelegramUserAction;
use App\Modules\Telegram\Domain\DTO\CreateTelegramUserDTO;
use App\Modules\Telegram\Domain\DTO\UpdateTelegramUserDTO;
use App\Service\Auth\AuthService;
use App\Service\Auth\DTO\CreateUserDTO;
use App\Service\Telegram\ValidateService;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\Auth;

class TelegramController extends Controller
{
    public function auth(
        Request $request,
        ValidateService $validateService,
        AuthService $authService,
        CreateTelegramUserAction $createTelegramUserAction,
        UpdateTelegramUserAction $updateTelegramUserAction,
    ): AuthTelegramResource {
        $params = $request->get('query');

        parse_str(urldecode($params), $tgData);
        $telegramUserData = json_decode($tgData['user'], true);

        if ($validateService->validate($params)) {
            $telegramUser = TelegramUser::where('telegram_id', $telegramUserData['id'])->first();
            if (!$telegramUser) {
                $telegramUser = $createTelegramUserAction->handle(
                    telegramUserDTO: new CreateTelegramUserDTO($telegramUserData)
                );
            } else {
                $telegramUser = $updateTelegramUserAction->handle(
                    telegramUserDTO: new UpdateTelegramUserDTO($telegramUserData),
                    telegramUser:$telegramUser,
                );
            }

            $user = $authService->getOrCreateUser(new CreateUserDTO(
                telegramUser: $telegramUser,
            ));

            Auth::login($user);
            $request->session()->regenerate();
            $token = $user->createToken('telegram')->plainTextToken;

            return new AuthTelegramResource($user, $token);

        }

        throw new Exception('TelegramUserInvalid');
    }

    public function updateName(Request $request): UpdateNameResource
    {
        $name = $request->get('name');

        $user = $request->user();
        $user->public_name = $name;
        $user->save();

        return new UpdateNameResource($user);
    }
}
