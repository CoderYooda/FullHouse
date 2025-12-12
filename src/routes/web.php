<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TelegramController;


Route::get('/', [HomeController::class, 'index'])
    ->name('home');

Route::get('/telegram{any}', [TelegramController::class, 'index'])
    ->where('any', '.*')
    ->name('home');

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/test', [TelegramController::class, 'test']);
});
