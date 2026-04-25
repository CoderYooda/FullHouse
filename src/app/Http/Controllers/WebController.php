<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;

class WebController extends Controller
{
    public function index(): View
    {
        // Просто отдаём шаблон, никаких проверок
        return view('app', ['isWeb' => true]);
    }
}
