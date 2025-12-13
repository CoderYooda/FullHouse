<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/**
 * --- Properties from a database ---
 * @property int $id
 * @property string $title
 * @property string $description
 * @property string $is_ended
 * @property Carbon|null $created_at
 *
 * */

class Tournament extends Model
{
    protected $table = 'tournaments';

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'participants', 'tournament_id', 'user_id');
    }
//    public function telegramUser(): BelongsTo
//    {
//        return $this->belongsTo(TelegramUser::class, 'telegram_user_id');
//    }
}
