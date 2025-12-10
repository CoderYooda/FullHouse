import Cards from "../../../Utils/Cards";

export class PlayerHand {

    cards = [];

    constructor(data) {
        if (!data.hasOwnProperty('cards')) {
            return
        }

        for (let i = 0; i < data.cards.length; i++) {
            this.cards.push(Cards.parseCard(data.cards[i]))
        }
        // this.cards = data.cards ?? null
    }
}