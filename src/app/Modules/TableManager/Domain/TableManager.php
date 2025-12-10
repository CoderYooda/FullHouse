<?php

namespace App\Modules\TableManager\Domain;

use Illuminate\Support\Str;
use Laravel\Octane\Facades\Octane;

class TableManager
{
    private const TABLES = [
        [
            'name' => 'Первый стол',
            'uuid' => 'awdawd',
        ],
        [
            'name' => 'Второй стол',
            'uuid' => '234234',
        ]
    ];


    public static function watchTables(): array
    {
        foreach (self::TABLES as $table) {
            Octane::table('gameTables')->set($table['uuid'], [
                'name' => $table['name'],
                'uuid' => uuid_create(),
            ]);
        }
    }
}
