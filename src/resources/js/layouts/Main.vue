<template>
  <div class="main container">
    <div class="blur-overlay static"></div>
    <router-view @scroll.passive="onScroll" id="scroller" class="view"/>

    <div class="footer boxed">
      <div class="buttons">
        <router-link activeClass="active" :to="{ name: 'report' }" class="footer_button report_button"><div class="active-arrow"></div></router-link>
        <router-link activeClass="active" :to="{ name: 'player' }" class="footer_button profile_button"><div class="active-arrow"></div></router-link>
        <router-link activeClass="active" :to="{ name: 'tournaments' }" class="footer_button main_button" />
        <router-link activeClass="active" :to="{ name: 'rating' }" class="footer_button rating_button"><div class="active-arrow"></div></router-link>
        <router-link activeClass="active" :to="{ name: 'game' }" class="footer_button cards_button"><div class="active-arrow"></div></router-link>
      </div>
    </div>
  </div>
  <div class="body-backdrop" :style="{ 'background-position-y': -background / 3 + 'px' }"></div>

  <CitySelector :visible="$store.state.ui.showCitySelector" @city-selected="onCitySelected" />
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import CitySelector from '../components/CitySelector.vue';

export default {
  name: 'Main',
  components: { CitySelector },
  data() {
    return {
      isAsideOpen: (localStorage.getItem('aside_hidden') === 'true'),
      pageLoaded: false,
      searchActive: false,
      categories: 'categories',
      background: 0,
      showCitySelector: false,
    };
  },
  computed: {
    ...mapGetters('auth', ['User']),
    user() {
      return this.User;
    },
    topPadding() {
      return this.safeTop + 'px';
    },
    isLoading() {
      return this.$store.state._fullscreenLoading;
    },
  },
  watch: {
    user: {
      immediate: true,
      handler(newUser) {
        if (newUser && !newUser.city_id) {
          this.$store.commit('ui/SET_SHOW_CITY_SELECTOR', true);
        }
      },
    },
  },
  methods: {
    ...mapMutations(['TOGGLE_DEVELOP_MODE']),

    appKeyUp(event) {
      if (event.key === 'Insert') {
        this.toggleAside();
      }
    },

    toggleAside() {
      this.isAsideOpen = !this.isAsideOpen;
      localStorage.setItem('aside_hidden', this.isAsideOpen);
    },

    activateSearch() {
      this.searchActive = true;
    },

    deActivateSearch() {
      this.searchActive = false;
      if (this.$refs.search) {
        this.$refs.search.value = '';
      }
    },

    enterFullscreen() {
      if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initData !== "") {
        window.Telegram.WebApp.requestFullscreen();
      }
    },

    toggleDevelopMode() {
      this.TOGGLE_DEVELOP_MODE();
    },

    test() {
      alert(1);
    },

    onScroll(event) {
      this.background = event.target.scrollTop;
    },

    onCitySelected() {
      this.$store.commit('ui/SET_SHOW_CITY_SELECTOR', false);
      // Обновляем пользователя
      this.$store.dispatch('auth/GetPlayer');
    },

    // Метод для открытия модалки из дочерних компонентов
    openCitySelector() {
      this.showCitySelector = true;
    },
  },
  async mounted() {
    this.enterFullscreen();

    setTimeout(() => {
      this.pageLoaded = true;
      this.$store.state._fullscreenLoading = false;
    }, 2000);

    document.addEventListener('keyup', (event) => this.appKeyUp(event));

    if (this.user && this.user.city_id) {
      this.showCitySelector = false;
    }
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