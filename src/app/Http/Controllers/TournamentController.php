<?php

namespace App\Http\Controllers;

use App\Http\Resources\Api\Telegram\ActiveTournamentResource;
use App\Models\Tournament;
use App\Service\StateService;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Contracts\View\View;

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

    public function getActive(): ActiveTournamentResource
    {
        $tournament = Tournament::query()
            ->whereDate('created_at', Carbon::today())->first();

        $participant = $tournament->users->pluck('id')->contains(auth()->user()->id);

        return new ActiveTournamentResource($tournament, $participant);
    }

    public function join(): string
    {
        $tournament = Tournament::query()
            ->whereDate('created_at', Carbon::today())->first();

        $tournament->users()->attach(auth()->user()->id);

        return 'ok';
    }
}
