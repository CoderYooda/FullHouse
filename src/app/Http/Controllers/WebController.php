<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;

class WebController extends Controller
{
    public function index(): View
    {
        // Для web-версии создаём заглушку компании (или берём первую)
        $company = (object)['slug' => 'web'];

        return view('app', [
            'company' => $company,
            'isWeb' => true,
        ]);
    }
}
