<?php

namespace App\Models;

use App\Enums\FeedbackType;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * --- Properties from a database ---
 * @property int $id
 * @property int $type
 * @property int $user_id
 * @property bool $is_anonymous
 * @property bool $is_solved
 * @property string $message
 * @property Carbon|null $incident_at
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @property-read User $user {@see static::user()}
 *
 * */

class Feedback extends Model
{
    protected $table = 'feedback';

    protected function casts(): array
    {
        return [
            'type' => FeedbackType::class,
            'incident_at' => 'datetime',
        ];
    }


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
