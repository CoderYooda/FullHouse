<?php

namespace Tests\Unit\Modules\Holdem\Models;

use App\Modules\Holdem\Models\Card;
use App\Modules\Holdem\Models\Deck;
use Tests\TestCase;

class DeckTest extends TestCase
{
    public function testSuccessBuildDeck()
    {
        $deck = new Deck();

        $this->assertCount(52, $deck->getCards());
    }

    public function testSuccessShuffleDeck()
    {
        $deck = new Deck();
        /** @var Card $firstCard */
        $firstCard = $deck->getCards()[0];
        $deck->shuffle();

        $this->assertNotEquals($firstCard, $deck->getCards()[0]);
    }

    public function testSuccessDealDeck()
    {
        $deck = new Deck();

        $deck->deal();

        $this->assertCount(50, $deck->getCards());
        $this->assertCount(2, $deck->getDealtCards());
    }
}
