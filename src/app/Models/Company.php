<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * --- Properties from a database ---
 * @property int $id
 * @property string $name
 * @property string $slug
 * @property string $tg_bot_token
 * @property Carbon|null $created_at
 *
 * @property-read User|null $users {@see static::users()}
 * */

class Company extends Model
{
    protected $table = 'companies';

    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class, 'company_id');
    }
}
