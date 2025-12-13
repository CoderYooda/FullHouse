<?php

namespace App\Http\Controllers;

use App\Models\Tournament;
use App\Service\StateService;
use Illuminate\Http\Request;
use Illuminate\Contracts\View\View;

class AdminController extends Controller
{
    public function index(): View
    {
        $tournaments = Tournament::orderBy('created_at', 'DESC')->get();

        return view('admin.index', [
            'tournaments' => $tournaments,
        ]);
    }
}
