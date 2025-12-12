<?php

namespace App\Http\Controllers;

use App\Service\StateService;
use Illuminate\Http\Request;
use Illuminate\Contracts\View\View;

class HomeController extends Controller
{
    public function index(): string
    {
        return 'ok';
    }
}
