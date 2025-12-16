<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/**
 * --- Properties from a database ---
 * @property int $id
 * @property int $telegram_id
 * @property int $user_id
 * @property string $first_name
 * @property string | null $last_name
 * @property string | null $username
 * @property string | null $language_code
 * @property bool $allows_write_to_pm
 * @property string | null $photo_url
 * */

class TelegramUser extends Authenticatable
{
}
