import {Howl} from 'howler';

let sound = new Howl({
    src: '/public/sounds/pokersound.wav',
    volume: 1,
    sprite: {
        cards: [0, 450],
        check: [500, 505],
        one_card: [1000, 350],
        call: [1700, 300],
        rise: [1400, 300],
        win: [2700, 1300],
        fold: [4500, 500],
    }
});

export default {

    play(sprite){
        sound.play(sprite)
    }
}