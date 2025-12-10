import {SocketEventInterface} from "./SocketEventInterface";

export class BetOfferUpdateEvent extends SocketEventInterface{
    constructor(data) {
        data = data ? data.bet_offer : null
        super({
            all_in_amount: data ? data.all_in_amount : null,
            bank_amount: data ? data.bank_amount : null,
            call_amount: data ? data.call_amount : null,
            can_check: data ? data.can_check : null,
            rise_amount: data ? data.rise_amount : null,
            rise_step: data ? data.rise_step : null,
            waiting_action: data ? data.waiting_action : false,
        })
    }

    getAllInAmount(){
        return this.event.all_in_amount
    }

    getBankAmount(){
        return this.event.bank_amount
    }

    getCallAmount(){
        return this.event.call_amount
    }

    getCanCheck(){
        return this.event.can_check
    }

    getRizeAmount(){
        return this.event.rise_amount
    }

    getRiseStep(){
        return this.event.rise_step
    }

    getWaitingAction(){
        return this.event.waiting_action
    }
}