<?php

namespace App\Http\Requests;

use App\Enums\FeedbackType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateFeedbackRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'type' => [
                Rule::in(FeedbackType::cases()),
            ],
            'date' => [
                Rule::requiredIf(function (){
                    return request()->input('type') === FeedbackType::Incident;
                }),
            ],
            'message' => ['required','string','max:1000'],
            'is_anon' => ['required','bool'],
        ];
    }
}
