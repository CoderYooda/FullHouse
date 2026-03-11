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

class TournamentController extends Controller
{
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

    public function getTodayList(): TournamentCollectionResource
    {
        /** @var User $user */
        $user = auth()->user();

        $tournaments = Tournament::query()
            ->with('users')
            ->whereDate('event_date', '>=', Carbon::today()->startOfDay())
            ->where('is_actual', true)
            ->whereHas('users', function ($query) use ($user) {
                $query->where('participants.user_id', $user->id)
                ->where('participants.is_actual', true);
            })
            ->orderBy('event_date')
            ->get();

        if ($tournaments) {
//            $participant = $tournament->users()
//                ->where('participants.is_actual', true)
//                ->pluck('id')
//                ->contains($user->id);

            return new TournamentCollectionResource($tournaments);
        }

        throw new ModelNotFoundException();
    }

    public function list(Request $request): TournamentCollectionResource
    {
        $company = Company::query()
            ->where('slug', $request->get('company'))
            ->first();

        $tournaments = Tournament::query()
            ->whereDate('event_date', '>=', Carbon::today())
            ->where('is_actual', true)
            ->where('company_id', $company->id)
            ->orderBy('event_date')
            ->get();

        if ($tournaments) {
//            $participant = $tournament->users()
//                ->where('participants.is_actual', true)
//                ->pluck('id')
//                ->contains($user->id);

            return new TournamentCollectionResource($tournaments);
        }

        throw new ModelNotFoundException();
    }

    public function join(Request $request, int $tournament_id): JsonResponse
    {
        /** @var User $user */
        $user = auth()->user();

        /** @var Tournament $tournament */
        $tournament = Tournament::query()
            ->with('users')
            ->where('id', $tournament_id)->first();

        $actualUser = $tournament->users->where('id', $user->id)->first();

        if ($actualUser) {
            $actualUser->pivot->is_actual = true;
            $actualUser->pivot->save();
        } else {
            $tournament->users()->attach(auth()->user()->id, [
                'created_at' => Carbon::now(),
            ]);
        }

        $this->recalculationOrderPlayers($this->getSortedActualPlayers($tournament_id));

        return $this->getTournamentPlayers($tournament_id);
    }

    public function get(Request $request, int $tournament_id): TournamentResource
    {
        /** @var Tournament $tournament */
        $tournament = Tournament::query()
            ->where('id', $tournament_id)->first();

        if ($tournament) {
            return new TournamentResource($tournament);
        }

        throw new ModelNotFoundException();
    }

    public function leave(Request $request, int $tournament_id): JsonResponse
    {
        /** @var User $user */
        $user = auth()->user();

        /** @var Tournament $tournament */
        $tournament = Tournament::query()
            ->where('id', $tournament_id)->first();

        $actualUser = $tournament->users->where('id', $user->id)->first();

        if ($actualUser) {
            $actualUser->pivot->is_actual = false;
            $actualUser->pivot->serial_number = null;
            $actualUser->pivot->save();
        }

        $this->recalculationOrderPlayers($this->getSortedActualPlayers($tournament_id));

        return $this->getTournamentPlayers($tournament_id);
    }

    public function getTournamentPlayers($tournament_id): JsonResponse
    {
        return new JsonResponse([
            'players' => $this->getSortedActualPlayers($tournament_id),
        ]);
    }

    public function recalculationOrderPlayers($users): JsonResponse
    {
        $counter = 1;

        foreach ($users as $user) {
            $user->pivot->serial_number = $counter;
            $user->pivot->save();

            $counter++;
        }

        return new JsonResponse([
            'status' => 'ok'
        ]);
    }

    public function getSortedActualPlayers($tournament_id)
    {
        $tournament = Tournament::query()
            ->owned()
            ->where('id', $tournament_id)
            ->firstOrFail();

        $users = $tournament->users()
            ->orderBy('serial_number')
            ->where('is_actual', true)
            ->with('telegramUser')
            ->get();

        return $users;
    }

}
