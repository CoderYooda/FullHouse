<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class Participant extends Pivot
{
    protected $table = 'participants';
    public $timestamps = false;
    protected $fillable = ['user_id', 'tournament_id', 'is_actual', 'is_arrived', 'serial_number'];
}
