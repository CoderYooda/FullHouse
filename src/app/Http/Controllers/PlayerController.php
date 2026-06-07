<?php

namespace App\Http\Controllers;

use App\Http\Resources\Api\Player\PlayerResource;
use App\Http\Resources\Api\Telegram\UpdateNameResource;
use App\Http\Resources\Tournament\TournamentCollectionResource;
use App\Models\Tournament;
use App\Models\User;
use App\Repositories\TournamentRepository;
use App\Service\User\UserService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PlayerController extends Controller
{
    public function __construct(
        private readonly UserService $userService,
        private readonly TournamentRepository $tournamentRepository
    ) {}

    public function getPlayer(): PlayerResource
    {
        /** @var User $player */
        $player = auth()->user();

        return new PlayerResource($player);
    }

    public function acceptAgreement(): JsonResponse
    {
        /** @var User $player */
        $player = auth()->user();
        $player->agreement = true;
        $player->save();

        return new JsonResponse([
            'success' => true,
        ]);
    }

    public function getTournaments(Request $request): TournamentCollectionResource
    {
        $user = $this->userService->getAuthenticatedUser();

        $tournaments = $this->tournamentRepository->getUserUpcomingTournaments($user->id);

        return new TournamentCollectionResource($tournaments);
    }

    public function updateUserName(Request $request): UpdateNameResource
    {
        $user = $this->userService->getAuthenticatedUser();

        $updatedUser = $this->userService->updatePublicName($user->id, $request->get('name'));

        return new UpdateNameResource($updatedUser);
    }
}
