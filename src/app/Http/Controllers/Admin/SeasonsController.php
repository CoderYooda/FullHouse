<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Season\UpdateSeasonRequest;
use App\Http\Resources\Api\Player\PlayerResource;
use App\Models\Feedback;
use App\Models\Season;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class SeasonsController extends Controller
{
    public function index(): View
    {
        $seasons = Season::query()
            ->owned()
            ->orderBy('created_at', 'DESC')
            ->paginate(10);

        return view('admin.seasons.index', compact('seasons'));
    }

    public function new(): View
    {
        return view('admin.seasons.edit', [
            'season' => null,
        ]);
    }

    public function save(UpdateSeasonRequest $request): RedirectResponse
    {
        $season = new Season();
        $season->name = $request->get('title');
        $season->start_date = $request->get('start_date');
        $season->end_date = $request->get('end_date');

        $season->save();

        return redirect(route('admin.seasons.index', $season->id));
    }
}
