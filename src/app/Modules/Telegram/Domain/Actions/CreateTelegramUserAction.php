<?php

namespace App\Modules\Telegram\Domain\Actions;

use App\Models\TelegramUser;
use App\Modules\Telegram\Domain\DTO\CreateTelegramUserDTO;

class CreateTelegramUserAction
{
    public function handle(CreateTelegramUserDTO $telegramUserDTO): TelegramUser
    {
        $telegramUser = new TelegramUser();
        $telegramUser->telegram_id = $telegramUserDTO->telegram_id;
        $telegramUser->first_name = $telegramUserDTO->first_name;
        $telegramUser->last_name = $telegramUserDTO->last_name;
        $telegramUser->username = $telegramUserDTO->username;
        $telegramUser->language_code = $telegramUserDTO->language_code;
        $telegramUser->allows_write_to_pm = $telegramUserDTO->allows_write_to_pm;
        $telegramUser->photo_url = $telegramUserDTO->photo_url;

        $telegramUser->save();

        return $telegramUser;
    }
}
