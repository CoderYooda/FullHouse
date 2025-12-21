<?php

namespace App\Modules\Tournament\DTO;

use App\Models\Tournament;

class UpdateTournamentDTO
{
    public function __construct(
        public readonly ?int $tournamentId = null,
        public readonly string $title,
        public readonly int $stack,
        public readonly int $levels_start,
        public readonly int $levels_end,
        public readonly int $small_blind,
        public readonly int $big_blind,
        public readonly int $ante,
        public readonly int $buy_in,
        public readonly int $re_entry,
        public readonly int $add_on,
        public readonly string $event_date,
        public readonly string $start_at,
        public readonly string $late_registration,
        public readonly bool $free_entry,
        public readonly bool $without_re_entry,
        public readonly bool $without_add_on,
        public readonly bool $is_private,
        public readonly bool $is_actual,
    ){
    }
}
