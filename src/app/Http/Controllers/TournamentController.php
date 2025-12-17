<?php

namespace App\Http\Controllers;

use App\Http\Resources\Api\Telegram\ActiveTournamentResource;
use App\Models\Tournament;
use App\Models\User;
use App\Service\StateService;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\ModelNotFoundException;
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
        /** @var User $user */
        $user = auth()->user();
        $tournament = Tournament::query()
            ->whereDate('created_at', Carbon::today())->first();
        if ($tournament) {
            $participant = $tournament->users()
                ->where('participants.is_actual', true)
                ->pluck('id')
                ->contains($user->id);

            return new ActiveTournamentResource($tournament, $participant);
        }

        throw new ModelNotFoundException();
    }

    public function join(): string
    {
        /** @var User $user */
        $user = auth()->user();

        $tournament = Tournament::query()
            ->whereDate('created_at', Carbon::today())->first();

        $actualUser = $tournament->users()->where('user_id', $user->id)->first();

        if ($actualUser) {
            $actualUser->pivot->is_actual = true;
            $actualUser->pivot->save();
        } else {
            $tournament->users()->attach(auth()->user()->id, [
                'created_at' => Carbon::now(),
            ]);
        }

        return 'ok';
    }

    public function leave(): string
    {
        /** @var User $user */
        $user = auth()->user();

        $tournament = Tournament::query()
            ->whereDate('created_at', Carbon::today())->first();

        $actualUser = $tournament->users()->where('user_id', $user->id)->first();

        if ($actualUser) {
            $actualUser->pivot->is_actual = false;
            $actualUser->pivot->save();
        }

        return 'ok';
    }
}
