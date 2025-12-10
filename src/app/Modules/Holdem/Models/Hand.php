<?php

namespace App\Modules\Holdem\Models;

class Hand
{
    /** @var array<int, Card> $cards */
    private array $cards = [];

    public function __construct(array $cards)
    {
        $this->cards = $cards;
    }

    public function getCards(): array
    {
        return $this->cards;
    }

    public function getCardsValues(): array
    {
        $values = [];
        foreach ($this->cards as $card) {
            $values[] = $card->getValue()->value;
        }

        return $values;
    }

    public function getCardsSuits(): array
    {
        $suits = [];
        foreach ($this->cards as $card) {
            $suits[] = $card->getSuit()->value;
        }

        return $suits;
    }
}
