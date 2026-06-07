<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class TelegramController extends Controller
{

    public function index(): View
    {
        return view('app', ['isWeb' => false,]);
    }


}
