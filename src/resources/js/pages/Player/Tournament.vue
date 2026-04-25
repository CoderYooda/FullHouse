<template>
  <div class="module">
    <h3>Предстоящие турниры
      <router-link :to="{ name: 'tournaments' }" class="right_button">все</router-link>
    </h3>
  </div>
  <div v-if="tournaments">
    <div v-for="tournament in tournaments" :key="tournament.id" class="tournament">
      <router-link :to="{ name: 'tournament', params: { id: tournament.id } }" class="my-link-wrapper">
        <div class="background">
          <div class="title">
            {{ tournament.title }} <br>{{ tournament.date }} в {{ tournament.at }}
          </div>
          <p class="descr">
            Стек: {{ tournament.stack }} ({{ tournament.small_blind }}/{{ tournament.big_blind }}/{{ tournament.ante }})<br>
            Buy-in: {{ tournament.buy_in }}₽<br>
            Re-Entry: {{ tournament.re_entry }}₽<br>
            Add-on: {{ tournament.add_on }}₽<br>
          </p>
          <div class="i_am_player">Я участник</div>
        </div>
      </router-link>
    </div>
  </div>
  <div class="module" v-if="!tournaments.length">
    <div class="user-card" style="text-align: center">
      В данный момент активных записей нет
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data: function () {
    return {
      tournaments: [],
    }
  },
  mounted() {
    this.getTournament();
  },
  methods: {
    async getTournament() {
      try {
        const { data } = await axios.post('/api/tournament/get');
        this.tournaments = data.data;
      } catch (error) {
        console.error('Error loading tournaments:', error);
      }
    },
    async joinTournament(id) {
      try {
        await axios.post('/api/tournament/' + id + '/join');
        const tournament = this.tournaments.find(t => t.id === id);
        if (tournament) tournament.participant = true;
      } catch (error) {
        console.error('Error joining tournament:', error);
      }
    },
    async leaveTournament(id) {
      try {
        await axios.post('/api/tournament/' + id + '/leave');
        const tournament = this.tournaments.find(t => t.id === id);
        if (tournament) tournament.participant = false;
      } catch (error) {
        console.error('Error leaving tournament:', error);
      }
    }
  },
  computed: {
    ...mapGetters('auth', ['Player']),
    player() {
      return this.Player;
    },
    slug() {
      return window.Slug;
    },
    visible() {
      return this.$store.state.state?._change_name_modal?.visible;
    }
  }
}
</script>