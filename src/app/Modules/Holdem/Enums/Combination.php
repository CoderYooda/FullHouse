<?php

namespace App\Modules\Holdem\Enums;

enum Combination: string
{
    case FourOfKind    = "4 of a Kind";
    case StraightFlush = "Straight Flush";
    case Straight      = "Straight";
    case Flush         = "Flush";
    case HighCard      = "High Card";
    case OnePair       = "1 Pair";
    case TwoPairs      = "2 Pairs";
    case RoyalFlush    = "Royal Flush";
    case ThreeOfAKind  = "3 of a Kind";
    case FullHouse     = "Full House";
    case Invalid       = "Invalid";
}
