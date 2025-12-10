<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TelegramController;


Route::get('/', [HomeController::class, 'index'])
    ->name('home');




Route::post('/auth/login', [TelegramController::class, 'login'])
    ->name('telegram.user.login');

Route::get('/telegram{any}', [TelegramController::class, 'index'])
    ->where('any', '.*')
    ->name('home');


Route::get('/act', [HomeController::class, 'act'])
    ->name('act');
