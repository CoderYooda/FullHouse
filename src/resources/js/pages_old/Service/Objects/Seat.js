export class Seat {

    reserved_time = 0;
    seat = null;
    status = null;
    player = null;
    self = false;

    constructor(reserved_time, seat, status, player, self){
        this.reserved_time = reserved_time
        this.seat = seat
        this.status = status
        this.player = player
        this.self = self
    }
}