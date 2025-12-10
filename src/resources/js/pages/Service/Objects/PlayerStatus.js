export class PlayerStatus {

    type = null;
    seconds = null;

    constructor(data) {
        this.type = data.type
        this.seconds = data.seconds
    }
}