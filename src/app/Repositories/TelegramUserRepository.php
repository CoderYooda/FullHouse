<?php

namespace App\Repositories;

use App\Models\TelegramUser;

class TelegramUserRepository
{
    public function create(array $data): TelegramUser
    {
        return TelegramUser::create($data);
    }

    public function findByTelegramId(string $telegramId): ?TelegramUser
    {
        return TelegramUser::where('telegram_id', $telegramId)->first();
    }

    public function update(int $id, array $data): bool
    {
        return TelegramUser::where('id', $id)->update($data);
    }

    public function find(int $id): ?TelegramUser
    {
        return TelegramUser::find($id);
    }
}