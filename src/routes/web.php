<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TelegramController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\TournamentController;


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
    Route::get('/admin', [AdminController::class, 'index'])
        ->where('any', '.*')
        ->name('admin.index');

    Route::post('/tournament/create', [TournamentController::class, 'create'])
        ->name('tournament.create');
});



