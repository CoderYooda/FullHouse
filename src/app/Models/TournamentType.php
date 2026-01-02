<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Collection;
use Laravel\Sanctum\HasApiTokens;
use App\Casts\TimeCast;

/**
 * --- Properties from a database ---
 * @property int $id
 * @property string $title
 * @property string $description
 * @property string $tournament_title
 * @property object $calculation_scheme
 *
 * */

class TournamentType extends Model
{
    protected $table = 'tournament_type';

    protected $guarded = [];
    public $timestamps = false;
    protected function casts(): array
    {
        return [
            'event_date' => 'date',
        ];
    }

    // Accessor (for retrieving the value)
    public function getStartAtAttribute($value)
    {
        return Carbon::parse($value)->format('H:i');
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'participants', 'tournament_id', 'user_id')
            ->withPivot('is_actual', 'created_at');
    }
//    public function telegramUser(): BelongsTo
//    {
//        return $this->belongsTo(TelegramUser::class, 'telegram_user_id');
//    }
}
