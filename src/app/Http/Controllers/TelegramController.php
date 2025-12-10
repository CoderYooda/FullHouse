<?php

namespace App\Http\Controllers;

use App\Service\StateService;
use Illuminate\Http\Request;
use Illuminate\Contracts\View\View;

class TelegramController extends Controller
{
    public function index(): View
    {
        return view('telegram');
    }

    public function validate(Request $request): View
    {
        dd($request);
        return view('telegram');
    }

    public function login(Request $request): View
    {
        dd($request);
        return view('telegram');
    }
}
