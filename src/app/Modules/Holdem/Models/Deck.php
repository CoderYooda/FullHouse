<?php

namespace App\Modules\Holdem\Models;

use App\Modules\Holdem\Enums\CardSuit;
use App\Modules\Holdem\Enums\CardValue;
use App\Modules\Holdem\Exceptions\NotEnoughtCardsException;

class Deck
{
    private array $cards = [];
    private array $dealtCards = [];

    public function __construct()
    {
        foreach (CardSuit::getSuitSet() as $suit) {
            foreach (CardValue::getSuitSet() as $value) {
                $this->cards[] = new Card($suit, $value);
            }
        }
    }

    public function shuffle(): void
    {
        shuffle($this->cards);
    }

    /** @throws NotEnoughtCardsException */
    public function deal(?int $count = 2): array
    {
        if (count($this->cards) < $count) {
            throw new NotEnoughtCardsException();
        }

        $dealt = array_slice($this->cards, 0, $count);
        $this->dealtCards = array_merge($this->dealtCards, $dealt);
        $this->cards = array_slice($this->cards, $count, count($this->cards));

        return $dealt;
    }

    public function getCards(): array
    {
        return $this->cards;
    }

    public function getDealtCards(): array
    {
        return $this->dealtCards;
    }
}
