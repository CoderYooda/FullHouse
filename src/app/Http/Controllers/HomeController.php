<?php

namespace App\Http\Controllers;

use App\Service\StateService;
use Illuminate\Http\Request;
use Illuminate\Contracts\View\View;

class HomeController extends Controller
{
    public function index(): View
    {
        return view('home');
    }

    public function act(Request $request): void
    {
        StateService::add($request->get('var') ?? 'act');
    }
}
