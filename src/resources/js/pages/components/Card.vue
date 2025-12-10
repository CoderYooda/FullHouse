<template>
    <div class="card"
         v-bind:class = "getActualClass"
    ></div>
</template>

<script>
    export default {
        data: function () {
            return {
                hidden: true,
                state: 'default',
                flipped: true,
                in_win: false,
                in_solution: false,
                in_out_of_solution: false,
                suite:'back_suite',
                value:null,
            }
        },
        methods: {
            set(card){
                this.hidden = false
                this.flipped = false
                this.in_win = false
                this.in_solution = false
                this.in_out_of_solution = false

                setTimeout(() => {
                    this.suite = card.suite
                    this.value = card.value
                }, 150)
            },
            hide(){
                this.hidden = true;
                this.clear()
            },
            setInSolution(val){
                this.in_solution = val
            },
            setInWin(val){
                this.in_win = val
            },
            setInOutOfSolution(val){
                this.in_out_of_solution = val
            },
            // showWinCard(inSolution, inWin){
            //     this.winProcess = true;
            //     this.inSolution = inSolution;
            //     this.inWin = inWin;
            // },
            // hideWinCard(){
            //     this.inSolution = false;
            //     this.inWin = false;
            //     this.winProcess = false;
            // },
            // inSolution(inSolution, isWin){
            //     this.inSolution = inSolution;
            //     this.isWin = isWin;
            // },
            // isOutOfSolution(inOutOfSolution){
            //     this.inOutOfSolution = inOutOfSolution
            // },
            clear(){
                this.flipped = true
                setTimeout(() => {
                    this.suite = 'back_suite'
                    this.value = null
                }, 150)
            }
        },
        computed: {
            getActualClass(){
                let classString = this.hidden?'hidden':'';

                if (this.flipped) {
                    classString += ' ' + 'flipped'
                }

                if (this.in_solution) {
                    classString += ' ' + 'in_solution'
                }

                if (this.in_win) {
                    classString += ' ' + 'in_win'
                }

                if (this.in_out_of_solution) {
                    classString += ' ' + 'in_out_of_solution'
                }

                // if (this.inOutOfSolution) {
                //     classString += ' ' + 'in_out_of_solution'
                // }
                //
                // if (this.inWin) {
                //     classString += ' ' + 'in_win'
                // }

                if (this.suite !== null) {
                    classString += ' ' + this.suite
                }

                if (this.value !== null) {
                    classString += ' ' + this.value
                }
                return classString;
            }
        }
    }
</script>

<style scoped>
.card {
    font-family: "Oswald", sans-serif;
    font-optical-sizing: auto;
    font-size: 30px;
    font-weight: bold;
    font-style: normal;
    height: 62px;
    width: 40px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    overflow: hidden;
    transform: rotateY(0deg);
    transition: 0.3s transform linear;
    &.in_solution{
        transform: translateY(-5px);
        background: #fff;
    }
    &.in_win{
        box-shadow: 0 0 0 2px #27ff00;
        z-index: 999;
    }
    &.in_out_of_solution{
        background: #5a5a5a;
    }
    &.hidden{
        opacity: 0;
    }
    &.flipped{
        transform: rotateY(180deg);
    }
    &.back_suite {
        background-image: url(/public/img/flipped.svg);
        background-size: 100%;
    }
    &::before{
        content: "";
        display: block;
        width: 100%;
        height: calc(56% - 3px);
        line-height: 100%;
        text-align: center;
        margin-top: 3px;
    }
    &.ace::before{
        content: "T";
    }
    &.king::before{
        content: "K";
    }
    &.queen::before{
        content: "Q";
    }
    &.jack::before{
        content: "J";
    }
    &.ten::before{
        content: "10";
    }
    &.nine::before{
        content: "9";
    }
    &.eight::before{
        content: "8";
    }
    &.seven::before{
        content: "7";
    }
    &.six::before{
        content: "6";
    }
    &.five::before{
        content: "5";
    }
    &.four::before{
        content: "4";
    }
    &.three::before{
        content: "3";
    }
    &.two::before{
        content: "2";
    }
    &::after {
        content: "";
        display: block;
        width: 100%;
        height: calc(44% - 3px);
        background-size: 44%;
        background-repeat: no-repeat;
        background-position: center;
        margin-bottom: 3px;
    }
    &.clubs::after {
        background-image: url(/public/img/suits/clubs.png);
    }
    &.diamonds::after {
        background-image: url(/public/img/suits/diamonds.png);
    }
    &.hearts::after {
        background-image: url(/public/img/suits/hearts.png);
    }
    &.spades::after {
        background-image: url(/public/img/suits/spades.png);
    }
}
</style>