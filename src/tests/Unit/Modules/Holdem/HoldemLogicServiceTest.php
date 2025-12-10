<?php

namespace Tests\Unit\Modules\Holdem;

use App\Modules\Holdem\Domain\HoldemLogicService;
use App\Modules\Holdem\Enums\CardSuit;
use App\Modules\Holdem\Enums\CardValue;
use App\Modules\Holdem\Enums\Combination;
use App\Modules\Holdem\Models\Card;
use App\Modules\Holdem\Models\Hand;
use PHPUnit\Framework\Attributes\DataProvider;
use Tests\TestCase;

class HoldemLogicServiceTest extends TestCase
{
    #[DataProvider('combinationsDataProvider')]
    public function testSuccessRank(
        string $aliasCombination,
        Combination $expectedCombination,
        int $expectedScore,
        array $expectedInSolution,
        array $expectedInWin,
        array $expectedKickers,
    ): void {
        $service = new HoldemLogicService();

        $hand = $this->makeHand($aliasCombination);

        $result = $service->rankHand($hand);

        $this->assertEquals($expectedCombination, $result->getCombination());
        $this->assertEquals($expectedInSolution, $result->getInSolution());
        $this->assertEquals($expectedInWin, $result->getInWin());
        $this->assertEquals($expectedKickers, $result->getKickers());
        $this->assertEquals($expectedScore, $result->getScore());
    }

    public static function combinationsDataProvider(): array
    {
        return [
            ['♣_4|♠_12|♥_2|♦_3|♠_11|♣_8|♠_10',    Combination::HighCard,     1,  [0, 1, 4, 5, 6], [1],             [11, 10, 8, 4]],
            ['♣_8|♠_10|♣_4|♠_12|♥_2|♦_3|♠_11',    Combination::HighCard,     1,  [0, 1, 2, 3, 6], [3],             [11, 10, 8, 4]],
            ['♣_8|♠_10|♣_4|♠_12|♥_8|♦_14|♠_11',   Combination::OnePair,      2,  [0, 3, 4, 5, 6], [0, 4],          [14, 12, 11]],
            ['♣_4|♠_12|♥_8|♦_10|♠_11|♣_8|♠_10',   Combination::TwoPairs,     3,  [1, 2, 3, 5, 6], [2, 5, 3, 6],    [12]],
            ['♠_8|♦_8|♥_11|♦_10|♠_14|♣_8|♥_3',    Combination::ThreeOfAKind, 4,  [0, 1, 2, 4, 5], [0, 1, 5],       [14, 11]],
            ['♣_9|♠_12|♥_8|♦_14|♠_11|♣_8|♠_10',   Combination::Straight,     5,  [0, 1, 2, 4, 6], [0, 1, 2, 4, 6], []],
            ['♠_8|♦_8|♥_11|♦_10|♠_11|♣_8|♥_3',    Combination::FullHouse,    7,  [0, 1, 2, 4, 5], [0, 1, 2, 4, 5], []],
            ['♠_8|♦_8|♥_11|♦_10|♠_11|♣_8|♥_8',    Combination::FourOfKind,   8,  [0, 1, 2, 5, 6], [0, 1, 5, 6],    [11]],
            ['♠_9|♠_12|♥_8|♦_14|♠_11|♠_8|♠_10',   Combination::StraightFlush,9,  [0, 1, 4, 5, 6], [0, 1, 4, 5, 6], []],
            ['♠_9|♠_12|♠_13|♠_14|♠_11|♠_8|♠_10',  Combination::RoyalFlush,   10, [1, 2, 3, 4, 6], [1, 2, 3, 4, 6], []],
            ['♠_14|♦_2|♥_3|♦_4|♠_5|♣_6|♥_7',      Combination::Straight,     5,  [0, 1, 2, 3, 4], [0, 1, 2, 3, 4], []],
        ];
    }

    private function makeHand(string $alias): Hand
    {
        $cardAliases = explode('|', $alias);

        foreach ($cardAliases as $index => $card) {

            $cardAliases[$index] = $this->makeCard($card);
        }

        return new Hand($cardAliases);
    }

    private function makeCard(string $alias): Card
    {
        $exploded = explode('_', $alias);
        $suitAlias = $exploded[0];
        $cardAlias = $exploded[1];

        return new Card(
            CardSuit::makeFromSymbol($suitAlias),
            CardValue::makeFromSymbol($cardAlias),
        );
    }
}
