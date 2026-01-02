<template>
    <div class="rise-slider">
        <input
            @input="riseSliderMove"
            class="slider"
            type="range"
            v-bind:min="min"
            v-bind:max="max"
            v-bind:step="step"
            v-bind:value="value"
            id="myRange"
        >
    </div>
</template>

<script>

    export default {
        data: function () {
            return {
            }
        },
        methods: {
            riseSliderMove(e){
                this.$attrs.setResult(e.target.value)
            },
        },
        computed: {
            min(){
                return this.$attrs.min ?? 0
            },
            max(){
                return this.$attrs.max ?? 100
            },
            value(){
                return this.$attrs.value ?? 0
            },
            step(){
                return this.$attrs.step ?? 1
            }
        }
    }
</script>

<style scoped>
.rise-slider{
    flex-basis: calc(50% - 5px);
    box-sizing: border-box;
    .slider{
        -webkit-appearance: none;  /* Override default CSS styles */
        appearance: none;
        width: 100%; /* Full-width */
        height: 25px; /* Specified height */
        background: #d3d3d3; /* Grey background */
        outline: none; /* Remove outline */
        opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
        -webkit-transition: .2s; /* 0.2 seconds transition on hover */
        transition: opacity .2s;
    }
    /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
    .slider::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        width: 25px; /* Set a specific slider handle width */
        height: 25px; /* Slider handle height */
        background: #04AA6D; /* Green background */
        cursor: pointer; /* Cursor on hover */
    }

    .slider::-moz-range-thumb {
        width: 25px; /* Set a specific slider handle width */
        height: 25px; /* Slider handle height */
        background: #04AA6D; /* Green background */
        cursor: pointer; /* Cursor on hover */
    }
}
</style>