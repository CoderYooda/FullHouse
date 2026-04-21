<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserCredential extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'provider', 'provider_uid', 'provider_data'];

    protected $casts = ['provider_data' => 'array'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
