<template>
    <router-link to="/" class="link"><span class="icon icon_none"></span><span class="link__title">Главная</span></router-link>

    <div class="component_container">
        <div class="actions">
            <button @click="this.$refs.player.setLoading(1000)">Loading 1 sec</button>
            <button @click="this.$refs.player.setLoading(5000)">Loading 5 sec</button>
            <button @click="this.$refs.player.setLoading(10000)">Loading 10 sec</button>
            <button @click="this.$refs.player.makeBet(1000)">Make Bet 1000</button>
            <button @click="this.$refs.player.makeBet(987452)">Make Bet 987452</button>
            <button @click="this.$refs.player.makeBetOut()">Make Bet Out</button>
            <button @click="this.$refs.player.setHand({
                cards:  Cards.getRandomCards(2)
            })">Set Hand</button>
            <button @click="this.$refs.player.hideHand()">Hide Hand</button>
            <button @click="this.$refs.player.clearHand()">Clear Hand</button>
        </div>
        <div class="component">
            <Player ref="player" v-bind:seat="1"/>
        </div>
    </div>
    <div class="component_container">
        <div class="actions">
            <button @click="this.$refs.tableCards.setHand({cards: Cards.getRandomCards(5)})">Set 5 Table Hand</button>
            <button @click="this.$refs.tableCards.setHand({cards: Cards.getRandomCards(4)})">Set 4 Table Hand</button>
            <button @click="this.$refs.tableCards.setHand({cards: Cards.getRandomCards(2)})">Set 2 Table Hand</button>
            <button @click="this.$refs.tableCards.hideHand()">Hide Hand</button>
            <button @click="this.$refs.tableCards.clearHand()">Clear Hand</button>
        </div>
        <div class="component">
            <TableCards ref="tableCards" />
        </div>
    </div>
    <div class="component_container">
        <div class="actions">
            <button @click="this.$refs.stake.addStake({value:123})">Add Stake</button>
            <button @click="this.$refs.stake.clearStakes()">Clear Stake</button>
        </div>
        <div class="component">
            <Stake ref="stake"/>
        </div>
    </div>
    <div class="component_container">
        <div class="actions">
            <button @click="this.$refs.actions.activate(true)">Set Active</button>
            <button @click="this.$refs.actions.activate(false)">Set Inactive</button>
        </div>
        <div class="component">
            <Actions ref="actions"/>
        </div>
    </div>
</template>

<script>
import Player from "./components/SeatModule/Seat/Player.vue";
import TableCards from "./components/TableCards.vue";
import Card from "./components/Card.vue";
import Cards from "../Utils/Cards";
import Bank from "./components/Bank.vue";
import Actions from "./components/Actions.vue";

export default {
    computed: {
        Cards() {
            return Cards
        },
    },
    components: {Actions, Bank, TableCards, Player, Card},
    // components: {Company},
  mounted() {

  },
}
</script>

<style scoped>
.component_container {
    display: flex;
    flex-direction: column;
    border: 2px solid #ffffff14;
    border-radius: 8px;
    padding: 10px;
    .actions {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        button {
            width: fit-content;
        }
    }
    .component {
        flex: auto;
        justify-content: center;
        display: flex;
        & > div {
            position: relative;
            left: 0;
            top: 0;
        }
    }
}
</style>