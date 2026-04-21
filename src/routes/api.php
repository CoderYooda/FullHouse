<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TournamentController;
use App\Http\Controllers\TelegramController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;


Route::post('/telegram/user/auth', [TelegramController::class, 'auth'])
    ->name('telegram.user.auth');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/verify-email', [AuthController::class, 'verifyEmail']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/telegram-login', [AuthController::class, 'telegramLogin']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/player/getPlayer', [PlayerController::class, 'getPlayer']);
    Route::post('/player/tournaments', [PlayerController::class, 'getTournaments']);
    Route::post('/player/update_name', [TelegramController::class, 'updateName']);
    Route::post('/player/accept_agreement', [PlayerController::class, 'acceptAgreement']);

    Route::post('/tournament/list', [TournamentController::class, 'list']);
    Route::post('/tournament/get', [TournamentController::class, 'getTodayList']);
    Route::post('/tournament/{tournament_id}/get', [TournamentController::class, 'get']);
    Route::post('/tournament/{tournament_id}/join', [TournamentController::class, 'join']);
    Route::post('/tournament/{tournament_id}/leave', [TournamentController::class, 'leave']);
    Route::post('/tournament/{tournament_id}/players', [TournamentController::class, 'getTournamentPlayers']);

    Route::post('/feedback/create', [FeedbackController::class, 'receiveFeedback']);

    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/link-telegram', [AuthController::class, 'linkTelegram']);
    Route::post('/unlink-telegram', [AuthController::class, 'unlinkTelegram']);
    Route::post('/set-city', [UserController::class, 'setCity']);
});

