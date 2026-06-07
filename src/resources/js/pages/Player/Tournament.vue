<template>
  <div class="module">
    <h3>Предстоящие турниры
      <router-link :to="{ name: 'tournaments' }" class="right_button">все</router-link>
    </h3>
  </div>
  <div v-if="filteredTournaments.length">
    <div v-for="tournament in filteredTournaments" :key="tournament.id" class="tournament">
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
  <div class="module" v-else>
    <div class="user-card" style="text-align: center">
      Вы не записаны ни на один турнир в выбранном городе
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      tournaments: [],
    };
  },
  computed: {
    ...mapGetters('auth', ['User']),
    user() {
      return this.User || {};
    },
    filteredTournaments() {
      if (!this.tournaments.length) return [];

      const userCityId = this.user?.city_id;

      return this.tournaments.filter(tournament => {
        const isParticipant = tournament.participant === true;
        const sameCity = userCityId ? tournament.city_id === userCityId : true;

        return isParticipant && sameCity;
      });
    },
  },
  watch: {
    // Следим за сменой города
    'user.city_id': {
      handler(newCityId, oldCityId) {
        if (newCityId !== oldCityId && oldCityId !== undefined) {
          console.log('City changed, reloading tournaments...');
          this.getTournament();
        }
      },
    },
  },
  mounted() {
    this.getTournament();
  },
  methods: {
    async getTournament() {
      try {
        const { data } = await axios.post('/api/tournament/get');
        this.tournaments = data.data;
        console.log('Tournaments reloaded:', this.tournaments.length);
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
    },
  },
};
</script>