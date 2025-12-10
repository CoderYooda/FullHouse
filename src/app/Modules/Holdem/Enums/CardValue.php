<?php

namespace App\Modules\Holdem\Enums;

enum CardValue: int
{
    case HiddenValue = 0;
    case Two         = 2;
    case Three       = 3;
    case Four        = 4;
    case Five        = 5;
    case Six         = 6;
    case Seven       = 7;
    case Eight       = 8;
    case Nine        = 9;
    case Ten         = 10;
    case Jack        = 11;
    case Queen       = 12;
    case King        = 13;
    case Ace         = 14;

    public static function getSuitSet(?GameType $gameType = GameType::TexasHoldem): array
    {
        return match ($gameType) {
            GameType::TexasHoldem => [
                self::Two,
                self::Three,
                self::Four,
                self::Five,
                self::Six,
                self::Seven,
                self::Eight,
                self::Nine,
                self::Ten,
                self::Jack,
                self::Queen,
                self::King,
                self::Ace,
            ]
        };
    }

    public static function makeFromSymbol(string $symbol): self
    {
        return match ($symbol) {
            '2'        => self::Two,
            '3'        => self::Three,
            '4'        => self::Four,
            '5'        => self::Five,
            '6'        => self::Six,
            '7'        => self::Seven,
            '8'        => self::Eight,
            '9'        => self::Nine,
            '10'       => self::Ten,
            'J' , '11' => self::Jack,
            'Q' , '12' => self::Queen,
            'K' , '13' => self::King,
            'T' , '14' => self::Ace,
        };
    }
}


