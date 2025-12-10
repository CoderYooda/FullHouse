<?php

namespace App\Providers;

use App\Modules\TableManager\Domain\TableManager;
use App\Service\StateService;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;
use Laravel\Octane\Facades\Octane;
use Illuminate\Support\Facades\Log;
use Laravel\Sanctum\PersonalAccessToken;
use Laravel\Sanctum\Sanctum;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton('stateService', function ($app) {
            return new StateService();
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Sanctum::usePersonalAccessTokenModel(PersonalAccessToken::class);


//        Octane::tick('simple-ticker', function () {
//            StateService::add("waw2");
//            Http::get('/php-backend:8020/act?var=lol');
////            self::tick($service);
//        })
//            ->seconds(1)
//            ->immediate();
    }

    private static function tick(StateService $service){

        $service::add(Str::random(10));
//        TableManager::watchTables();
//
//        Octane::table('examples')->set('uuid', [
//            'name' => Str::random(10),
//            'index' => uuid_create(),
//        ]);

//        Log::warning("awdwwdd tick", Octane::table('examples')->get('uuid'));
        $pid = getmypid();
        Log::warning("$pid tick", $service::get());
    }
}
