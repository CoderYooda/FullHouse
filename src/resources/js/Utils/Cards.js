import {Card} from "../pages/Service/Objects/Card";

const SUITE_DIAMONDS = "diamonds"
const SUITE_SPADES = "spades"
const SUITE_CLUBS = "clubs"
const SUITE_HEARTS = "hearts"
const SUITE_HIDDEN = "back_suite"

const VALUE_ACE = "ace"
const VALUE_KING = "king"
const VALUE_QUEEN = "queen"
const VALUE_JACK = "jack"
const VALUE_TEN = "ten"
const VALUE_NINE = "nine"
const VALUE_EIGHT = "eight"
const VALUE_SEVEN = "seven"
const VALUE_SIX = "six"
const VALUE_FIVE = "five"
const VALUE_FOUR = "four"
const VALUE_THREE = "three"
const VALUE_TWO = "two"
const VALUE_HIDDEN = "zero"

export default {
    SUITE_DIAMONDS: SUITE_DIAMONDS,
    SUITE_SPADES:   SUITE_SPADES,
    SUITE_CLUBS:    SUITE_CLUBS,
    SUITE_HEARTS:   SUITE_HEARTS,

    VALUE_ACE:      VALUE_ACE,
    VALUE_KING:     VALUE_KING,
    VALUE_QUEEN:    VALUE_QUEEN,
    VALUE_JACK:     VALUE_JACK,
    VALUE_TEN:      VALUE_TEN,
    VALUE_NINE:     VALUE_NINE,
    VALUE_EIGHT:    VALUE_EIGHT,
    VALUE_SEVEN:    VALUE_SEVEN,
    VALUE_SIX:      VALUE_SIX,
    VALUE_FIVE:     VALUE_FIVE,
    VALUE_FOUR:     VALUE_FOUR,
    VALUE_THREE:    VALUE_THREE,
    VALUE_TWO:      VALUE_TWO,

    SUITS:[
        SUITE_DIAMONDS,
        SUITE_SPADES,
        SUITE_CLUBS,
        SUITE_HEARTS,
    ],
    VALUES:[
        VALUE_ACE,
        VALUE_KING,
        VALUE_QUEEN,
        VALUE_JACK,
        VALUE_TEN,
        VALUE_NINE,
        VALUE_EIGHT,
        VALUE_SEVEN,
        VALUE_SIX,
        VALUE_FIVE,
        VALUE_FOUR,
        VALUE_THREE,
        VALUE_TWO,
    ],

    getRandomSuite(){
        return this.SUITS[Math.floor(Math.random() * this.SUITS.length)];
    },

    getRandomValue(){
        return this.VALUES[Math.floor(Math.random() * this.VALUES.length)];
    },

    getRandomCards(count){
        let hand = [];
        for (let i = 0; i < count; i++) {
            hand[i] = {
                value: this.getRandomValue(),
                suite: this.getRandomSuite(),
            }
        }
        return hand;
    },

    parseCard(data){
        return new Card(
            this.parseValue(data.value),
            this.parseSuit(data.suit),
            data.state,
            data.in_solution,
            data.in_out_of_solution,
            data.in_win,
        )
    },

    parseValue(value){
        switch (value) {
            case 0:
                return VALUE_HIDDEN;
            case 2:
                return VALUE_TWO;
            case 3:
                return VALUE_THREE;
            case 4:
                return VALUE_FOUR;
            case 5:
                return VALUE_FIVE;
            case 6:
                return VALUE_SIX;
            case 7:
                return VALUE_SEVEN;
            case 8:
                return VALUE_EIGHT;
            case 9:
                return VALUE_NINE;
            case 10:
                return VALUE_TEN;
            case 11:
                return VALUE_JACK;
            case 12:
                return VALUE_QUEEN;
            case 13:
                return VALUE_KING;
            case 14:
                return VALUE_ACE;
            default:
                console.log("VALUE NOT FOUND");
                return null
        }
    },

    parseSuit(suit){
        switch (suit) {
            case 0:
                return SUITE_HIDDEN;
            case 1:
                return SUITE_SPADES;
            case 8:
                return SUITE_CLUBS;
            case 32:
                return SUITE_HEARTS;
            case 64:
                return SUITE_DIAMONDS;
            default:
                console.log("SUIT NOT FOUND");
                return null
        }
    }
}