<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Tournament\UpdateTournamentRequest;
use App\Models\Season;
use App\Models\Tournament;
use App\Models\TournamentType;
use App\Modules\Tournament\Actions\UpdateTournamentAction;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class TournamentController extends Controller
{
    public function index(): View
    {
        $tournaments = Tournament::orderBy('created_at', 'DESC')->paginate(10);

        return view('admin.tournaments.index', [
            'tournaments' => $tournaments,
        ]);
    }

    public function view(Request $request, int $tournament_id): View
    {
        $tournament = Tournament::query()
            ->with('users', function (BelongsToMany $q) {
                $q->orderBy('pivot_is_actual', 'DESC');
            })
            ->where('id', $tournament_id)
            ->firstOrFail();

        return view('admin.tournaments.view', [
            'tournament' => $tournament,
        ]);
    }

    public function new(Request $request): View
    {
        $tournamentTypes = TournamentType::query()->get();
        $seasons = Season::query()->get();

        return view('admin.tournaments.edit', [
            'tournament' => null,
            'tournamentTypes' => $tournamentTypes,
            'seasons' => $seasons,
        ]);
    }

    public function edit(Request $request, int $tournament_id): View
    {
        $tournament = Tournament::query()
            ->where('id', $tournament_id)
            ->firstOrFail();

        $tournamentTypes = TournamentType::query()->get();
        $seasons = Season::query()->get();

        return view('admin.tournaments.edit', [
            'tournament' => $tournament,
            'tournamentTypes' => $tournamentTypes,
            'seasons' => $seasons,
        ]);
    }

    public function save(
        UpdateTournamentRequest $request,
        UpdateTournamentAction $updateTournamentAction,
    ): RedirectResponse {
        $tournament = $updateTournamentAction->handle($request->getDTO());

        return redirect(route('admin.tournament.view', $tournament->id));
    }

    public function actualToggle(
        Request $request,
        int $tournament_id,
    ): RedirectResponse {
        $tournament = Tournament::query()
            ->where('id', $tournament_id)
            ->firstOrFail();
        $tournament->is_actual = !$tournament->is_actual;

        $tournament->save();

        return redirect(route('admin.tournament.view', $tournament->id));
    }

    public function players($tournament_id): JsonResponse
    {
        $tournament = Tournament::query()
            ->where('id', $tournament_id)
            ->firstOrFail();

        return new JsonResponse([
            'players' => $tournament->users()->with('telegramUser')->get(),
        ]);
    }

    public function test(
        Request $request,
    ): RedirectResponse {
        dd(auth()->user());
    }
}
