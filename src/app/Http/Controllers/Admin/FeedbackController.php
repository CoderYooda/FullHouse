<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\Player\PlayerResource;
use App\Models\Feedback;
use App\Models\User;
use Illuminate\View\View;

class FeedbackController extends Controller
{
    public function index(): View
    {
        $feedbacks = Feedback::query()
            ->owned()
            ->orderBy('created_at', 'DESC')
            ->paginate(10);

        return view('admin.feedback', compact('feedbacks'));
    }
}
