<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TelegramUser extends Model
{
    use HasFactory;

    protected $fillable = [
        'telegram_id',
        'first_name',
        'last_name',
        'username',
        'language_code',
        'allows_write_to_pm',
        'photo_url',
    ];

//    public function user()
//    {
//        return $this->belongsTo(User::class, 'id', 'telegram_user_id');
//    }
}