<template>
  <div v-if="isLoading" class="preloader">
    <div class="blur-overlay"></div>
    <div class="logo"></div>
  </div>
  <component :is="layout" v-else />
</template>

<script>
import Auth from './layouts/Auth.vue';
import Main from './layouts/Main.vue';
import Clear from './layouts/Clear.vue';
import {mapMutations} from 'vuex';
import axios from 'axios';

export default {
  name: 'app',
  components: {Auth, Main, Clear},
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    layout() {
      return this.$route.meta.layout || 'Auth';
    },
    isTelegramMode() {
      return this.$route.path.startsWith('/telegram/');
    },
  },
  async mounted() {
    const token = localStorage.getItem('_token');

    // Если есть токен – загружаем пользователя
    if (token && !this.$store.state.auth.user) {
      try {
        await this.$store.dispatch('auth/GetPlayer');
      } catch (error) {
        localStorage.removeItem('_token');
        this.$store.commit('auth/LOGOUT');
      }
    }

    // Просто выключаем загрузку, никаких редиректов
    this.isLoading = false;
  },
  methods: {
    ...mapMutations('auth', ['setToken']),
    async telegramAuth() {
      try {
        const initData = window.TelegramInitData;
        if (!initData) {
          if (this.$route.name !== 'login') {
            this.$router.push({name: 'login'});
          }
          return;
        }

        const response = await axios.post('/api/telegram/user/auth', {
          query: initData,
        });

        const token = response.data.token;
        localStorage.setItem('_token', token);
        this.setToken({token});
        await this.$store.dispatch('auth/GetPlayer');
      } catch (error) {
        if (this.$route.name !== 'login') {
          this.$router.push({name: 'login'});
        }
      }
    },
  },
};
</script>