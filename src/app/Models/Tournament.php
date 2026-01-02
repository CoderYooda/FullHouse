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

/**
 * --- Properties from a database ---
 * @property int $id
 * @property int $season_id
 * @property string $title
 * @property string $description
 * @property string $is_ended
 * @property Carbon|null $created_at
 * @property Carbon|null $event_date
 * @property string $start_at
 * @property string $late_registration
 * @property int $stack
 * @property int $small_blind
 * @property int $big_blind
 * @property int $ante
 * @property int $buy_in
 * @property int $re_entry
 * @property int $add_on
 * @property int $levels_start
 * @property int $levels_end
 * @property bool $free_entry
 * @property bool $without_re_entry
 * @property bool $without_add_on
 * @property bool $is_private
 * @property bool $is_actual
 *
 * @property-read Collection|null $users {@see static::users()}
 * @property-read Season|null $season {@see static::season()}
 * @property-read Collection|null $types {@see static::types()}
 * @property-read Collection|null $players {@see static::players()}
 *
 * */

class Tournament extends Model
{
    protected $table = 'tournaments';

    protected function casts(): array
    {
        return [
            'event_date' => 'date',
        ];
    }

    public function getStartAtAttribute($value)
    {
        return Carbon::parse($value)->format('H:i');
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'participants', 'tournament_id', 'user_id')
            ->withPivot('is_actual', 'is_arrived', 'created_at');
    }

    public function players(): Collection
    {
        return $this->users->where('pivot.is_arrived', true);
    }

    public function types(): BelongsToMany
    {
        return $this->belongsToMany(TournamentType::class, 'tournament_type_to_tournaments', 'tournament_id', 'tournament_type_id');
    }

    public function season(): BelongsTo
    {
        return $this->belongsTo(Season::class, 'season_id');
    }
}
