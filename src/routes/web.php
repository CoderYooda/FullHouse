<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TelegramController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\TournamentController;
use App\Http\Controllers\Admin\PlayersController;
use App\Http\Controllers\Admin\TournamentController as AdminTournamentController;


Route::get('/', [HomeController::class, 'index'])
    ->name('home');

Route::get('/telegram{any}', [TelegramController::class, 'index'])
    ->where('any', '.*')
    ->name('home');

Route::get('/login', [AuthController::class, 'login'])
    ->name('login');

Route::post('/login', [AuthController::class, 'authenticate'])
    ->name('admin.login');

Route::post('/telegram/user/auth', [TelegramController::class, 'auth'])
    ->name('telegram.user.auth');

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/player/update_name', [TelegramController::class, 'updateName']);
    Route::post('/tournament/get', [TournamentController::class, 'getTodayList']);
    Route::post('/tournament/{tournament_id}/join', [TournamentController::class, 'join']);
    Route::post('/tournament/{tournament_id}/leave', [TournamentController::class, 'leave']);
});

Route::middleware(['auth:web'])->group(function () {
    Route::get('/admin', function (\Illuminate\Http\Request $request) {
        return redirect()->route('admin.tournaments.index');
    })->name('admin.index');

    Route::prefix('admin/tournaments')->group(function () {
        Route::get('/', [AdminTournamentController::class, 'index'])
            ->name('admin.tournaments.index');
        Route::get('/{tournament_id}/view', [AdminTournamentController::class, 'view'])
            ->name('admin.tournament.view');
        Route::get('/new', [AdminTournamentController::class, 'new'])
            ->name('admin.tournament.new');
        Route::get('/{tournament_id}/edit', [AdminTournamentController::class, 'edit'])
            ->name('admin.tournament.edit');
        Route::post('/save', [AdminTournamentController::class, 'save'])
            ->name('admin.tournament.save');
        Route::post('/{tournament_id}/actualToggle', [AdminTournamentController::class, 'actualToggle'])
            ->name('admin.tournament.actualToggle');
    });


    Route::get('/admin/players', [PlayersController::class, 'index'])
        ->name('admin.players.index');

    Route::post('/tournament/create', [TournamentController::class, 'create'])
        ->name('tournament.create');
});





