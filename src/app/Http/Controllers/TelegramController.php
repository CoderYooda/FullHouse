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

    public function index(): View
    {
        return view('app', ['isWeb' => false,]);
    }

    public function test(): string
    {
        return auth()->user()->name;
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
