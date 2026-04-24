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
import { mapMutations } from 'vuex';
import axios from 'axios';

export default {
  name: 'app',
  components: { Auth, Main, Clear },
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
    const currentPath = this.$route.path;

    // === ПРИНУДИТЕЛЬНЫЙ РЕДИРЕКТ С КОРНЯ ===
    if (currentPath === '/') {
      this.$router.push('/login');
      this.isLoading = false;
      return;
    }

    // Определяем режим: если путь начинается с /telegram ИЛИ window.IsWeb === false
    const isTelegramMode = this.isTelegramMode || (!window.IsWeb && window.TelegramInitData);

    if (!isTelegramMode) {
      // === WEB-РЕЖИМ (браузер, email/пароль) ===
      if (token) {
        try {
          await this.$store.dispatch('auth/GetPlayer');
          // Если пользователь уже авторизован и пытается зайти на login/register - редиректим
          if (this.$route.name === 'login' || this.$route.name === 'register') {
            this.$router.push({name: 'player'});
          }
        } catch (error) {
          localStorage.removeItem('_token');
          if (this.$route.name !== 'login' && this.$route.name !== 'register') {
            this.$router.push({name: 'login'});
          }
        }
      } else {
        // Нет токена - если не на странице логина/регистрации, редиректим
        if (this.$route.name !== 'login' && this.$route.name !== 'register') {
          this.$router.push({name: 'login'});
        }
      }
      this.isLoading = false;
    } else {
      // === TELEGRAM-РЕЖИМ (авторизация через Telegram) ===
      if (token) {
        try {
          await this.$store.dispatch('auth/GetPlayer');
          this.isLoading = false;
        } catch (error) {
          localStorage.removeItem('_token');
          await this.telegramAuth();
        }
      } else {
        await this.telegramAuth();
      }
    }
  },
  methods: {
    ...mapMutations('auth', ['setToken']),
    async telegramAuth() {
      try {
        const initData = window.TelegramInitData;
        if (!initData) {
          console.error('Нет данных от Telegram');
          this.isLoading = false;
          // Если нет данных Telegram, переключаемся на web-режим
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
        this.isLoading = false;
      } catch (error) {
        console.error('Ошибка авторизации Telegram', error);
        this.isLoading = false;
        // При ошибке переключаемся на web-режим
        if (this.$route.name !== 'login') {
          this.$router.push({name: 'login'});
        }
      }
    },
  },
};
</script>