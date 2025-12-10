<?php

namespace App\Modules\Holdem\Models;

use App\Modules\Holdem\Enums\CardSuit;
use App\Modules\Holdem\Enums\CardValue;
use Ramsey\Uuid\Nonstandard\Uuid;

class Card
{
    private CardSuit $suit;
    private CardValue $value;
    private string $uuid;

    public function __construct(CardSuit $suit, CardValue $value)
    {
        $this->suit = $suit;
        $this->value = $value;
        $this->uuid = Uuid::uuid4();;
    }

    public function getSuit(): CardSuit
    {
        return $this->suit;
    }

    public function getValue(): CardValue
    {
        return $this->value;
    }

    public function getIndex(): int
    {
        return $this->value->value + $this->suit->value * 2;
    }

    public function getUuid(): string
    {
        return $this->uuid;
    }
}
