<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TournamentController;
use App\Http\Controllers\TelegramController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\FeedbackController;


//Route::post('/tokens/telegram/create', function (Request $request) {
//    $token = $request->user()->createToken('telegram', ['read', 'write']);
//
//    return ['token' => $token->plainTextToken];
//});

Route::post('/telegram/user/auth', [TelegramController::class, 'auth'])
    ->name('telegram.user.auth');

//Route::post('/tokens/create', function (Request $request) {
//    $token = $request->user()->createToken($request->token_name);
//    return ['token' => $token->plainTextToken];
//});
//
//Route::middleware(['auth:sanctum'])->group(function () {
//    Route::post('/player/update_name', [TelegramController::class, 'updateName']);
//    Route::post('/tournament/get', [TournamentController::class, 'getTodayList']);
//    Route::post('/tournament/join', [TournamentController::class, 'join']);
//});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/player/getPlayer', [PlayerController::class, 'getPlayer']);
    Route::post('/player/tournaments', [PlayerController::class, 'getTournaments']);
    Route::post('/player/update_name', [TelegramController::class, 'updateName']);

    Route::post('/tournament/list', [TournamentController::class, 'list']);
    Route::post('/tournament/get', [TournamentController::class, 'getTodayList']);
    Route::post('/tournament/{tournament_id}/get', [TournamentController::class, 'get']);
    Route::post('/tournament/{tournament_id}/join', [TournamentController::class, 'join']);
    Route::post('/tournament/{tournament_id}/leave', [TournamentController::class, 'leave']);
    Route::post('/feedback/create', [FeedbackController::class, 'receiveFeedback']);
});
//
//Route::get('/user', function (Request $request) {
//    return $request->user();
//})->middleware('auth:sanctum');
