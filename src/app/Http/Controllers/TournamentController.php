<?php

namespace App\Http\Controllers;

use App\Http\Resources\Api\Telegram\ActiveTournamentResource;
use App\Http\Resources\Tournament\TournamentCollectionResource;
use App\Http\Resources\Tournament\TournamentResource;
use App\Models\Company;
use App\Models\Tournament;
use App\Models\User;
use App\Service\StateService;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Contracts\View\View;
use function Symfony\Component\String\u;
use App\Repositories\TournamentRepository;
use App\Service\TournamentService;
use App\Service\User\UserService;

class TournamentController extends Controller
{
    public function __construct(
        protected TournamentRepository $tournamentRepository,
        protected TournamentService $tournamentService,
        protected UserService $userService,
    )
    {

    }

    public function create(Request $request): RedirectResponse
    {
        $actualTournament = Tournament::query()
            ->whereDate('created_at', Carbon::today())->first();

        if ($actualTournament) {
            return back()->withErrors([
                'message' => 'На сегодня турнир уже объявлен, ' . $actualTournament->title,
            ]);
        }

        $data = $request->validate([
            'title' => 'required | string',
            'description' => 'required | string',
        ]);

        $tournament = new Tournament();
        $tournament->title = $data['title'];
        $tournament->description = $data['description'];

        $tournament->save();

        return redirect()->route('admin.index');
    }

    public function getUpcomingTournaments(Request $request): TournamentCollectionResource
    {
        $user = $this->userService->getAuthenticatedUser();

        $tournaments = $this->tournamentRepository->getUpcomingTournaments($user->city_id);

        return new TournamentCollectionResource($tournaments);
    }

    public function getUserUpcomingTournaments(): TournamentCollectionResource
    {
        $user = $this->userService->getAuthenticatedUser();
        $tournaments = $this->tournamentRepository->getUserUpcomingTournaments($user->id);

        return new TournamentCollectionResource($tournaments);
    }

    public function join(int $tournament_id): JsonResponse
    {
        $tournament = Tournament::findOrFail($tournament_id);
        $user = $this->userService->getAuthenticatedUser();

        $this->tournamentService->addParticipant($tournament, $user);

        $this->tournamentService->recalculationOrderPlayers(
            $this->tournamentRepository->getSortedActualPlayers($tournament_id)
        );

        return $this->getTournamentPlayers($tournament_id);
    }

    public function leave(int $tournament_id): JsonResponse
    {
        $tournament = Tournament::findOrFail($tournament_id);
        $user = $this->userService->getAuthenticatedUser();

        $this->tournamentService->removeParticipant($tournament, $user);
        $this->tournamentService->recalculationOrderPlayers(
            $this->tournamentRepository->getSortedActualPlayers($tournament_id)
        );

        return $this->getTournamentPlayers($tournament_id);
    }

    public function getTournament(int $tournament_id): TournamentResource
    {
        return new TournamentResource($this->tournamentRepository->getTournament($tournament_id));
    }

    public function getTournamentPlayers($tournament_id): JsonResponse
    {
        return new JsonResponse([
            'players' => $this->tournamentRepository->getSortedActualPlayers($tournament_id),
        ]);
    }


}
