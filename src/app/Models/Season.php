<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

/**
 * --- Properties from a database ---
 * @property int $id
 * @property string $name
 * @property string $logo
 * @property Carbon|null $start_date
 * @property Carbon|null $end_date
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * */

class Season extends Model
{
    protected $table = 'seasons';

    protected function casts(): array
    {
        return [
            'end_date' => 'datetime',
            'start_date' => 'datetime',
        ];
    }

    public function scopeOwned(Builder $query): void
    {
        $query->where('company_id', auth()->user()->company_id);
    }
}
