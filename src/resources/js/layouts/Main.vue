<template>
  <div class="main container">
    <div class="blur-overlay static"></div>
    <router-view @scroll.passive="onScroll" id="scroller" class="view"/>
    <div class="footer boxed">
      <div class="buttons">
        <router-link :to="{ name: $route.path.startsWith('/telegram/') ? 'report_telegram' : 'report' }" class="footer_button report_button">
          <div class="active-arrow"></div>
        </router-link>
        <router-link :to="{ name: $route.path.startsWith('/telegram/') ? 'player_telegram' : 'player' }" class="footer_button profile_button">
          <div class="active-arrow"></div>
        </router-link>
        <router-link :to="{ name: $route.path.startsWith('/telegram/') ? 'tournaments_telegram' : 'tournaments' }" class="footer_button main_button" />
        <router-link :to="{ name: $route.path.startsWith('/telegram/') ? 'rating_telegram' : 'rating' }" class="footer_button rating_button">
          <div class="active-arrow"></div>
        </router-link>
        <router-link :to="{ name: $route.path.startsWith('/telegram/') ? 'game_telegram' : 'game' }" class="footer_button cards_button">
          <div class="active-arrow"></div>
        </router-link>
      </div>
    </div>
  </div>
  <div class="body-backdrop" :style="{ 'background-position-y': -background / 3 + 'px' }"></div>
  <CitySelector :visible="showCitySelector" @city-selected="onCitySelected" />
</template>

<script>
import { mapGetters } from 'vuex';
import CitySelector from '../components/CitySelector.vue';

export default {
  name: 'Main',
  components: { CitySelector },
  data() {
    return {
      background: 0,
      showCitySelector: false,
    };
  },
  computed: {
    ...mapGetters('auth', ['User']),
    user() {
      return this.User;
    },
  },
  watch: {
    user: {
      immediate: true,
      handler(newUser) {
        if (newUser && !newUser.city_id) {
          this.showCitySelector = true;
        } else {
          this.showCitySelector = false;
        }
      },
    },
  },
  methods: {
    onScroll(event) {
      this.background = event.target.scrollTop;
    },
    onCitySelected() {
      this.showCitySelector = false;
      // Обновляем данные пользователя
      this.$store.dispatch('auth/GetPlayer');
    },
    enterFullscreen() {
      if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initData !== "") {
        window.Telegram.WebApp.requestFullscreen();
      }
    },
  },
  mounted() {
    this.enterFullscreen();
  },
};
</script>

<style>
:root {
  --tg-safe-area-inset-top: 20px;
  --tg-content-safe-area-inset-top: 40px;
}
.main {
  background-image: url(/public/img/game_bg.png);
}
</style>