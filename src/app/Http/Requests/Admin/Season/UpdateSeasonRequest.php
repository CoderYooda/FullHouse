<?php

namespace App\Http\Requests\Admin\Season;

use App\Modules\Tournament\DTO\UpdateTournamentDTO;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
