<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tournament;
use App\Models\User;
use Illuminate\Contracts\View\View;

class PlayersController extends Controller
{
    public function index(): View
    {
        /** @var User $user */
        $user = auth()->user();

        $users = User::query()
            ->owned()
            ->paginate(15);

        return view('admin.players', [
            'users' => $users,
        ]);
    }
}
