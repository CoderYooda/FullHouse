<?php

namespace App\Modules\Telegram\Domain\DTO;

class UpdateTelegramUserDTO
{
    public readonly ?string $first_name;
    public readonly ?string $last_name;
    public readonly ?bool $allows_write_to_pm;
    public readonly ?string $photo_url;

    public function __construct(
        public array $telegramUserData,
    ){
        $this->first_name = $telegramUserData['first_name'];
        $this->last_name = $telegramUserData['last_name'];
        $this->allows_write_to_pm = $telegramUserData['allows_write_to_pm'] ?? false;
        $this->photo_url = $telegramUserData['photo_url'];
    }
}
