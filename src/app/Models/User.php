<?php

namespace App\Models;

use App\Models\City;
use App\Models\UserCredential;
use App\Models\MergeHistory;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/**
 * --- Properties from a database ---
 * @property int $id
 * @property string|null $telegram_user_id
 * @property string $name
 * @property string $public_name
 * @property int $company_id
 * @property string $te
 * @property string $email
 * @property string $password
 * @property bool $agreement
 * @property Carbon|null $created_at
 *
 * @property-read TelegramUser|null $telegramUser {@see static::telegramUser()}
 * @property-read Tournament|null $tournaments {@see static::tournaments()}
 * */

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'public_name',
        'telegram_user_id',
    ];
    protected $appends = ['photo_url'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'two_factor_secret',
        'two_factor_recovery_codes',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'two_factor_confirmed_at' => 'datetime',
        ];
    }

    public function scopeOwned(Builder $query): void
    {
        $query->where('company_id', auth()->user()->company_id);
    }

    public function telegramUser()
    {
        return $this->belongsTo(TelegramUser::class, 'telegram_user_id');
    }

    public function getPhotoUrlAttribute()
    {
        return $this->telegramUser?->photo_url;
    }

    public function tournaments(): BelongsToMany
    {
        return $this->belongsToMany(Tournament::class, 'participants', 'user_id', 'tournament_id')
            ->withPivot('is_actual', 'created_at');
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function mergedInto()
    {
        return $this->belongsTo(User::class, 'merged_into_user_id');
    }

    public function credentials()
    {
        return $this->hasMany(UserCredential::class);
    }

    public function participants()
    {
        return $this->hasMany(Participant::class, 'user_id');
    }

    public function isPrimary()
    {
        return is_null($this->merged_into_user_id) && $this->is_active;
    }
}
