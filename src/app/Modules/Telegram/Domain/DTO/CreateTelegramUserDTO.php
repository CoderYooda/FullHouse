<?php

namespace App\Modules\Telegram\Domain\DTO;

class CreateTelegramUserDTO
{
    public readonly int $telegram_id;
    public readonly ?string $first_name;
    public readonly ?string $last_name;
    public readonly string $username;
    public readonly ?string $language_code;
    public readonly bool $allows_write_to_pm;
    public readonly ?string $photo_url;

    public function __construct(
        public array $telegramUserData,
    ){
        $this->telegram_id = $telegramUserData['id'];
        $this->first_name = $telegramUserData['first_name'];
        $this->last_name = $telegramUserData['last_name'];
        $this->username = $telegramUserData['username'];
        $this->language_code = $telegramUserData['language_code'];
        $this->allows_write_to_pm = $telegramUserData['allows_write_to_pm'];
        $this->photo_url = $telegramUserData['photo_url'];
    }
}
