<?php

namespace App\Modules\Holdem\Domain;

use App\Modules\Holdem\Enums\Combination;
use App\Modules\Holdem\Exceptions\TooManyCardForRankException;
use App\Modules\Holdem\Models\Hand;
use App\Modules\Holdem\Models\HandResult;

class HoldemLogicService
{
    private int $handSize = 0;

    private array $handIndex = [8, 9, 5, 6, 1, 2, 3, 10, 4, 7, 0];
    private array $wci = [];
    private int $score;
    private int $pokerScore = 0;

    /**
     * @throws TooManyCardForRankException
     */
    public function rankHand(Hand $hand): HandResult
    {
        if (count($hand->getCards()) < 5) {
            throw new TooManyCardForRankException('Not enough cards!');
        }

        $cards = $hand->getCardsValues();
        $suits = $hand->getCardsSuits();

        $indexCollection = [];

        foreach ($hand->getCards() as $i => $card) {
            $index = $card->getIndex();
            $indexCollection[$index] = 1;
        }

        $this->handSize += count($indexCollection);

        $c = $this->getCombinations(5, $this->handSize);

        $maxRank = 0;
        $winIndex = 10;
        for ($i = 0; $i < count($c); $i++) {

            $cs = [
                $cards[$c[$i][0]],
                $cards[$c[$i][1]],
                $cards[$c[$i][2]],
                $cards[$c[$i][3]],
                $cards[$c[$i][4]],
            ];
            $ss = [
                $suits[$c[$i][0]],
                $suits[$c[$i][1]],
                $suits[$c[$i][2]],
                $suits[$c[$i][3]],
                $suits[$c[$i][4]],
            ];

            $index = $this->calcIndex($cs, $ss);

            if ($this->handIndex[$index] > $maxRank) {

                $maxRank = $this->handIndex[$index];
                $this->score = $maxRank;
                $winIndex = $index;

                $this->wci = $c[$i];

            }

            if ($this->handIndex[$index] === $maxRank) {
                $score1 = $this->getPokerScore($cs);
                $score2 = $this->getPokerScore([
                    $cards[$this->wci[0]],
                    $cards[$this->wci[1]],
                    $cards[$this->wci[2]],
                    $cards[$this->wci[3]],
                    $cards[$this->wci[4]],
                ]);

                if ($score1 > $score2) {
                    $this->pokerScore = $score1;
                    $this->wci = $c[$i];
                }
            }

        }
        $index1 = $winIndex;

        $combination = Combination::cases()[$index1];

        $inWin = $this->processInWin($this->wci, $combination, $cards);
        $kickers = $this->processKickers($this->wci, $inWin, $cards);

        return new HandResult(
            userId: 1,
            hand: $hand,
            amount: 1,
            combination: $combination,
            inSolution: $this->wci,
            inWin: $inWin,
            kickers: $kickers,
            score: $this->score,
            pokerScore: $this->pokerScore
        );
    }

    private function getCombinations(int $k, int $n): array
    {
        $result = [];
        $combination = [];

        while ($this->nextCombination($combination, $k, $n)) {
            $c = $combination;
            $result[] = $c;
        }

        return $result;
    }

    private function nextCombination(array &$combination, int $k, int $n): bool
    {
        if (count($combination) === 0) {
            for ($i = 0; $i < $k; $i++) {
                $combination[] = $i;
		    }

            return true;
        }

        $i = $k - 1;
        $combination[$i]++;

        while ($i > 0 && $combination[$i] >= $n-$k+1+$i) {
            $i--;
            $combination[$i]++;
        }

        if ($combination[0] > $n - $k) {
            return false;
        }

        for ($i = $i + 1; $i < $k; $i++) {
            $combination[$i] = $combination[$i-1] + 1;
        }

        return true;
    }

    private function calcIndex(array $cs, array $ss): int
    {
        $v = 0;
        $o = 0;
        for ($i = -1; $i < 5; $i++) {

            if ($i >= 0 && $i <= count($cs)) {
                $o = (int)pow(2, (float)$cs[$i]*4);
            }
            $ind = 0;
            if ($o > 0) {
                $ind = $v / $o & 15;
            }
            $v = $v + $o * ($ind + 1);
        }

        $s = 0;
        $v = $v % 15;

        if ($v !== 5) {
            return $v - 1;
        } else {
            $s = 1 << $cs[0] | 1<<$cs[1] | 1<<$cs[2] | 1<<$cs[3] | 1<<$cs[4];
        }

        if ($s / ($s&-$s) == 31 || $s == 0x403c) {
            $v = $v - 3;
        } else {
            $v = $v - 1;
        }
        $lo = 0;

        if ($ss[0] == ($ss[0] | $ss[1] | $ss[2] | $ss[3] | $ss[4])) {
            $lo = 1;
        }

        $multiplier = 1;

        if ($s == 0x7c00) {
            $multiplier = -5;
        }

        return $v - $lo * $multiplier;
    }

    private function getPokerScore(array $cs): int
    {
        $arr = [$cs[0], $cs[1], $cs[2], $cs[3], $cs[4]];

        $d = [];
        for ($i = 0; $i < 5; $i++) {
            if (array_key_exists($arr[$i], $d) && $d[$arr[$i]] >= 1) {

                $d[$arr[$i]]++;
            } else {

                $d[$arr[$i]] = 1;
            }
        }
        rsort($arr);

        return $arr[0]<<16 | $arr[1]<<12 | $arr[2]<<8 | $arr[3]<<4 | $arr[4];
    }

    private function processInWin(array $wci, Combination $combination, array $cards): array
    {
        if (
            $combination == Combination::RoyalFlush ||
            $combination == Combination::Straight ||
            $combination == Combination::Flush ||
            $combination == Combination::StraightFlush
        ){
            return $wci;
        }
        $wci2 = [];
        $process = match ($combination) {
            Combination::HighCard => function() use ($wci, $wci2, $cards){
                $highCard = 0;
                foreach ($cards as $card) {
                    if ($highCard < $card) {
                        $highCard = $card;
                    }
                }
                foreach ($wci as $item) {
                    if ($cards[$item] === $highCard) {
                        $wci2[] = $item;

                        return $wci2;
                    }
                }

                return [];
            },
            Combination::OnePair,
            Combination::TwoPairs,
            Combination::ThreeOfAKind,
            Combination::FourOfKind => function() use ($wci, $wci2, $cards) {
                foreach ($wci as $index => $item) {
                    foreach ($wci as $index2 => $item2) {
                        if ($index !== $index2 && $cards[$item] === $cards[$item2]) {
                            if (!in_array($item, $wci2)) {
                                $wci2[] = $item;
                            }
                            if (!in_array($item2, $wci2)) {
                                $wci2[] = $item2;
                            }
                        }
                    }
                }

                return $wci2;
            },
            default => function() use ($wci){
                return $wci;
            }
        };

        return $process();
    }

    private function processKickers(array $wci, array $inWin, array $cards): array
    {
        $kickers = [];
        foreach ($cards as $index => $card) {
            if (in_array($index, $wci) && !in_array($index, $inWin)) {
                $kickers[] = $card;
            }
        }

        rsort($kickers);

        return $kickers;
    }
}
