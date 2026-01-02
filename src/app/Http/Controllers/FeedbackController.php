<?php

namespace App\Http\Controllers;

use App\Enums\FeedbackType;
use App\Http\Requests\CreateFeedbackRequest;
use App\Models\Feedback;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;

class FeedbackController extends Controller
{
    public function receiveFeedback(CreateFeedbackRequest $request): JsonResponse
    {
        $feedback = new Feedback();
        $feedback->type = FeedbackType::from($request->validated('type'));
        $feedback->user_id = $request->user()->id;
        $feedback->message = $request->validated('message');
        $feedback->incident_at = in_array($feedback->type, [
            FeedbackType::Incident,
        ]) ? Carbon::parse($request->validated('date')) : null;
        $feedback->is_anonymous = $request->validated('is_anon');

        $feedback->save();

        return new JsonResponse([
            'status' => 'OK',
        ]);
    }
}
