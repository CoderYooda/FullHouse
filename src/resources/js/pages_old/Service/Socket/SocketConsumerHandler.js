import useEventsBus from './EventBus';
import {SeatUpdateEvent} from "./Events/Consume/SeatUpdateEvent";
import {PlayerUpdateEvent} from "./Events/Consume/PlayerUpdateEvent";
import {TableHandUpdateEvent} from "./Events/Consume/TableHandUpdateEvent";
import {BankUpdateEvent} from "./Events/Consume/BankUpdateEvent";
import {PlayerHandUpdateEvent} from "./Events/Consume/PlayerHandUpdateEvent";
import {BetOfferUpdateEvent} from "./Events/Consume/BetOfferUpdateEvent";
import {AwardUpdateEvent} from "./Events/Consume/AwardUpdateEvent";
import {PlayerActedUpdateEvent} from "./Events/Consume/PlayerActedUpdateEvent";

export class SocketConsumerHandler {

    handle(data){
        const {emit}=useEventsBus()

        switch (data.type) {
            case 'PlayersUpdate':
                data.seats.forEach(seat => {
                    emit('SeatUpdate_' + seat.seat, new SeatUpdateEvent(seat))
                    emit('PlayerUpdate_' + seat.seat, new PlayerUpdateEvent(seat))
                    emit('PlayerHandUpdate_' + seat.seat, new PlayerHandUpdateEvent(seat))
                });
                break;
            case 'TableUpdate':
                emit('TableHandUpdate', new TableHandUpdateEvent(data))
                emit('BankUpdate', new BankUpdateEvent(data))
                break;
            case 'BetOffer':
                emit('BetOfferUpdate', new BetOfferUpdateEvent(data))
                break;
            case 'AwardUpdate':
                emit('AwardUpdate', new AwardUpdateEvent(data))
                break;
            case 'PlayerActedUpdate':
                emit('PlayerActed', new PlayerActedUpdateEvent(data))
                break;
            case 'updateInfo':
                break;
        }
        //
    }
}