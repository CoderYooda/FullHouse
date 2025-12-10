<?php

namespace App\Modules\Holdem\Models;

use App\Modules\Holdem\Enums\Combination;

readonly class HandResult
{
    public function __construct(
        private int $userId,
        private Hand $hand,
        private int $amount,
        private Combination $combination,
        private array $inSolution,
        private array $inWin,
        private array $kickers,
        private int $score,
        private int $pokerScore
    ){
    }

    public function getUserId(): int
    {
        return $this->userId;
    }

    public function getHand(): Hand
    {
        return $this->hand;
    }

    public function getAmount(): int
    {
        return $this->amount;
    }

    public function getCombination(): Combination
    {
        return $this->combination;
    }

    public function getInSolution(): array
    {
        return $this->inSolution;
    }

    public function getInWin(): array
    {
        return $this->inWin;
    }

    public function getKickers(): array
    {
        return $this->kickers;
    }

    public function getScore(): int
    {
        return $this->score;
    }

    public function getPokerScore(): int
    {
        return $this->pokerScore;
    }
}
