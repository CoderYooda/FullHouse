<?php

namespace App\Service;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Facade;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class StateService extends Facade
{
    public static array $states = [];

    protected static function getFacadeAccessor(): string
    {
        return 'stateService'; // This key must match the binding in your Service Provider
    }

    public static function add(string $item): void
    {
        self::$states[] = $item;

        self::save();
    }

    public static function get(): array
    {
        self::load();

        return self::$states;
    }

    private static function save(): void
    {
        $state = [
            self::$states,
        ];

        Cache::store('octane')->put('StateService', json_encode($state), 22);

        Log::info('saved', ['states' => Cache::store('octane')->get('StateService')]);
    }

    private static function load(): void
    {
        $raw = Cache::store('octane')->get('StateService');
        Log::info('loaded', ['states' => $raw]);
        if (!$raw) {
            return;
        }

        $state = json_decode($raw, true);

        if ($state && array_key_exists('states', $state)) {
            Log::info('loaded', ['states' => $state['states']]);
            self::$states = $state['states'];
        }
    }
}
