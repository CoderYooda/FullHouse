<?php

namespace App\Modules\Holdem\Enums;

enum CardSuit: int
{
    case HiddenSuit = 0; // 0
    case Spades     = 1; // ♠
    case Clubs      = 8; // ♣
    case Hearts     = 32; // ♥
    case Diamonds   = 64; // ♦

    public static function getSuitSet(): array
    {
        return [
            self::Spades,
            self::Clubs,
            self::Hearts,
            self::Diamonds,
        ];
    }

    public static function makeFromSymbol(string $symbol): self
    {
        return match ($symbol) {
            '♠', '1' , 's' => self::Spades,
            '♣', '8' , 'c' => self::Clubs,
            '♥', '32', 'h' => self::Hearts,
            '♦', '64', 'd' => self::Diamonds,
        };
    }
}
