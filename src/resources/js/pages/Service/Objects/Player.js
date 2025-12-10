import {PlayerStatus} from "./PlayerStatus";
import {PlayerHand} from "./PlayerHand";

export class Player {

    seat = null;
    credits = null;
    bet = null;
    status = PlayerStatus;
    hand = PlayerHand;
    name = null;
    pic = null;
    reserved = false;
    buy = 0;
    roles = [];
    id = null;

    constructor(name, seat, credits, status, pic, bet, id){
        this.name = name;
        this.seat = seat;
        this.credits = credits;
        this.status = status;
        this.pic = pic;
        this.reserved = false;
        this.buy = 0;
        this.bet = bet;
        this.id = id;
    }

    setRoles(roles){
        this.roles = roles
    }

    setHand(hand){
        this.hand = hand
    }

    hasRole(role) {
        return this.roles && this.roles.includes(role)
    }
}