<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getLoginUser(Request $request)
    {
        return $request->user();
    }

    public function setCity(Request $request)
    {
        $request->validate(['city_id' => 'required|exists:cities,id']);
        $user = $request->user();
        $user->city_id = $request->city_id;
        $user->save();
        return response()->json(['message' => 'Город сохранён']);
    }

}