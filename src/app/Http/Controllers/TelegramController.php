<?php

namespace App\Http\Controllers;

use App\Http\Resources\Api\Telegram\AuthTelegramResource;
use App\Http\Resources\Api\Telegram\UpdateNameResource;
use App\Http\Resources\Tournament\TournamentCollectionResource;
use App\Models\Company;
use App\Models\TelegramUser;
use App\Models\Tournament;
use App\Modules\Telegram\Domain\Actions\CreateTelegramUserAction;
use App\Modules\Telegram\Domain\Actions\UpdateTelegramUserAction;
use App\Modules\Telegram\Domain\DTO\CreateTelegramUserDTO;
use App\Modules\Telegram\Domain\DTO\UpdateTelegramUserDTO;
use App\Service\Auth\AuthService;
use App\Service\Auth\DTO\CreateUserDTO;
use App\Service\Telegram\ValidateService;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;
use Exception;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class TelegramController extends Controller
{
    public function index($company_slug): View
    {
        $company = Company::query()
            ->where('slug', $company_slug)
            ->first();

        if (!$company) {
            throw new NotFoundHttpException('Company not found');
        }

        return view('telegram', compact('company'));
    }

    public function test(): string
    {
        return auth()->user()->name;
    }

    public function auth(
        Request $request,
        ValidateService $validateService,
        AuthService $authService,
        CreateTelegramUserAction $createTelegramUserAction,
        UpdateTelegramUserAction $updateTelegramUserAction,
    ): JsonResponse {
        $params = $request->get('query');
        $companySlug = $request->get('company');

        $company = Company::query()
            ->where('slug', $companySlug)
            ->first();

        parse_str(urldecode($params), $tgData);
        $telegramUserData = json_decode($tgData['user'], true);

        if ($validateService->validate($params, $company->tg_bot_token)) {
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
                companyId: $company->id,
            ));

            $user->tokens()->delete();

            $token = $user->createToken('telegram', ['read', 'write']);

            return new JsonResponse([
                'token' => $token->plainTextToken,
            ]);
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
