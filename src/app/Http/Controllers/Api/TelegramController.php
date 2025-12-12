<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\Telegram\AuthTelegramResource;
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
                login: $telegramUser->username,
            ));
            $user->telegramUser()->save($telegramUser);

            $token = $user->createToken('telegram')->plainTextToken;

            return new AuthTelegramResource($user, $token);
        }

        throw new Exception('TelegramUserInvalid');
    }
}
