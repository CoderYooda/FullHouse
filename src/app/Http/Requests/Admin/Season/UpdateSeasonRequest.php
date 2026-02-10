<?php

namespace App\Http\Requests\Admin\Season;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSeasonRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'title' => ['required','string'],
            'start_date' => ['required','string'],
            'end_date' => ['required','string'],
        ];
    }
}
