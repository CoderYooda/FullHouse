<?php

namespace App\Http\Requests\Admin\Tournament;

use App\Modules\Tournament\DTO\UpdateTournamentDTO;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateTournamentRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'title' => ['required','string'],
            'stack' => ['required','integer','min:0'],
            'levels_start' => ['required','integer','min:0'],
            'levels_end' => ['required','integer','min:0'],
            'small_blind' => ['required','integer','min:0'],
            'big_blind' => ['required','integer','min:0'],
            'ante' => ['required','integer','min:0'],
            'buy_in' => [
                Rule::requiredIf(function (){
                    return !request()->input('free_entry');
                }),
            ],
            're_entry' => [
                Rule::requiredIf(function (){
                    return !request()->input('without_re_entry');
                }),
            ],
            'add_on' => [
                Rule::requiredIf(function (){
                    return !request()->input('without_add_on');
                }),
            ],
            'event_date' => ['required','string'],
            'start_at' => ['required','string'],
            'late_registration' => ['required','string'],
            'free_entry' => ['boolean'],
            'without_re_entry' => ['boolean'],
            'without_add_on' => ['boolean'],
            'is_private' => ['boolean'],
            'is_actual' => ['boolean'],
//            'requestProcessingParams.externalOrganizationId'            => ['nullable', 'string'],
//
//            'applicationIds'                                     => ['required', 'array', 'min:1', 'max:50'],
//            'applicationIds.*.initialApplicationId'              => ['required', 'string'],
//            'applicationIds.*.constantId'                        => ['required', 'string'],
//            'applicationIds.*.externalOrganizationApplicationId' => ['nullable', 'string'],
//            'applicationIds.*.targetApplicationId'               => ['nullable', 'string'],
//            'applicationIds.*.additionalApplicationId'           => ['nullable', 'string'],

        ];
    }

    public function getDTO(): UpdateTournamentDTO
    {
        return new UpdateTournamentDTO(
            tournamentId: (int)$this->get('id') ?? null,
            title: $this->validated('title'),
            stack: $this->validated('stack'),
            levels_start: $this->validated('levels_start'),
            levels_end: $this->validated('levels_end'),
            small_blind: $this->validated('small_blind'),
            big_blind: $this->validated('big_blind'),
            ante: $this->validated('ante'),
            buy_in: $this->validated('buy_in') ?? 0,
            re_entry: $this->validated('re_entry') ?? 0,
            add_on: $this->validated('add_on') ?? 0,
            event_date: $this->validated('event_date'),
            start_at: $this->validated('start_at'),
            late_registration: $this->validated('late_registration'),
            free_entry: $this->validated('free_entry') ?? false,
            without_re_entry: $this->validated('without_re_entry') ?? false,
            without_add_on: $this->validated('without_add_on') ?? false,
            is_private: $this->validated('is_private') ?? false,
            is_actual: $this->validated('is_actual') ?? false,
        );
    }
}
