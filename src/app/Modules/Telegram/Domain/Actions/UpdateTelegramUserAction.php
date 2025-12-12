<?php

namespace App\Modules\Telegram\Domain\Actions;

use App\Models\TelegramUser;
use App\Modules\Telegram\Domain\DTO\CreateTelegramUserDTO;
use App\Modules\Telegram\Domain\DTO\UpdateTelegramUserDTO;

class UpdateTelegramUserAction
{
    public function handle(
        UpdateTelegramUserDTO $telegramUserDTO,
        TelegramUser $telegramUser,
    ): TelegramUser {
        $telegramUser->first_name = $telegramUserDTO->first_name;
        $telegramUser->last_name = $telegramUserDTO->last_name;
        $telegramUser->allows_write_to_pm = $telegramUserDTO->allows_write_to_pm;
        $telegramUser->photo_url = $telegramUserDTO->photo_url;

        $telegramUser->save();

        return $telegramUser;
    }
}
