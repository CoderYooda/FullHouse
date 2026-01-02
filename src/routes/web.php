<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TelegramController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\TournamentController;
use App\Http\Controllers\Admin\PlayersController;
use App\Http\Controllers\Admin\TournamentController as AdminTournamentController;
use App\Http\Controllers\Admin\FeedbackController as AdminFeedbackController;
use App\Http\Controllers\Admin\SeasonsController as AdminSeasonsController;
use App\Http\Controllers\Admin\SettingsController as AdminSettingsController;


Route::get('/', [HomeController::class, 'index'])
    ->name('home');

Route::get('/telegram{any}', [TelegramController::class, 'index'])
    ->where('any', '.*')
    ->name('home');

Route::get('/login', [AuthController::class, 'login'])
    ->name('login');

Route::post('/login', [AuthController::class, 'authenticate'])
    ->name('admin.login');


Route::middleware(['auth:web'])->group(function () {

    Route::prefix('admin')->group(function () {
        Route::get('/', function (\Illuminate\Http\Request $request) {
            return redirect()->route('admin.tournaments.index');
        })->name('admin.index');

        Route::prefix('tournaments')->group(function () {
            Route::get('/', [AdminTournamentController::class, 'index'])
                ->name('admin.tournaments.index');
            Route::get('/{tournament_id}/view', [AdminTournamentController::class, 'view'])
                ->name('admin.tournament.view');
            Route::post('/create', [TournamentController::class, 'create'])
                ->name('tournament.create');
            Route::get('/new', [AdminTournamentController::class, 'new'])
                ->name('admin.tournament.new');
            Route::get('/{tournament_id}/edit', [AdminTournamentController::class, 'edit'])
                ->name('admin.tournament.edit');
            Route::post('/save', [AdminTournamentController::class, 'save'])
                ->name('admin.tournament.save');
            Route::post('/{tournament_id}/actualToggle', [AdminTournamentController::class, 'actualToggle'])
                ->name('admin.tournament.actualToggle');
            Route::post('/{tournament_id}/players', [AdminTournamentController::class, 'players'])
                ->name('admin.tournament.players');
            Route::post('/test', [AdminTournamentController::class, 'test'])
                ->name('admin.tournament.actualToggle');
        });

        Route::prefix('feedback')->group(function () {
            Route::get('/', [AdminFeedbackController::class, 'index'])
                ->name('admin.feedback.index');
        });

        Route::prefix('seasons')->group(function () {
            Route::get('/', [AdminSeasonsController::class, 'index'])
                ->name('admin.seasons.index');
            Route::get('/new', [AdminSeasonsController::class, 'new'])
                ->name('admin.seasons.new');
            Route::post('/save', [AdminSeasonsController::class, 'save'])
                ->name('admin.seasons.save');
        });


        Route::prefix('settings')->group(function () {
            Route::get('/', [AdminSettingsController::class, 'index'])
                ->name('admin.settings.index');
        });


        Route::get('players', [PlayersController::class, 'index'])
            ->name('admin.players.index');


    });
});





