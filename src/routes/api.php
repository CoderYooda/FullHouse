<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TournamentController;



//Route::post('/tokens/create', function (Request $request) {
//    $token = $request->user()->createToken($request->token_name);
//    return ['token' => $token->plainTextToken];
//});
//
//Route::middleware(['auth:sanctum'])->group(function () {
//    Route::post('/player/update_name', [TelegramController::class, 'updateName']);
//    Route::post('/tournament/get', [TournamentController::class, 'getActive']);
//    Route::post('/tournament/join', [TournamentController::class, 'join']);
//});
//
//Route::get('/user', function (Request $request) {
//    return $request->user();
//})->middleware('auth:sanctum');
