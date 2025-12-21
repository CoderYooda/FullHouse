<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Tournament\UpdateTournamentRequest;
use App\Models\Tournament;
use App\Modules\Tournament\Actions\UpdateTournamentAction;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
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
        return view('admin.tournaments.edit', [
            'tournament' => null,
        ]);
    }

    public function edit(Request $request, int $tournament_id): View
    {
        $tournament = Tournament::query()
            ->where('id', $tournament_id)
            ->firstOrFail();

        return view('admin.tournaments.edit', [
            'tournament' => $tournament,
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
}
