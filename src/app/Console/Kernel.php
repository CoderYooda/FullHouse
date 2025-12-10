<?php

namespace App\Console;

use App\Console\Commands\InitCommand;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected function schedule(Schedule $schedule): void
    {
        $schedule->command(InitCommand::class)
            ->everySecond();

        $schedule->call(function () {
            dd('hello world');
        })->everyMinute()->withoutOverlapping();
    }
}
