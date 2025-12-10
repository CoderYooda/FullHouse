<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TelegramController;

Route::get('/', [HomeController::class, 'index'])
    ->name('home');

Route::get('/tg', [TelegramController::class, 'index'])
    ->name('home');

Route::get('/act', [HomeController::class, 'act'])
    ->name('act');
