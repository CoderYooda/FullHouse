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
  },
  async mounted() {
    const token = localStorage.getItem('_token');
    const isTelegramPage = window.location.pathname === '/telegram/player';

    // Если страница авторизации через бота — не трогаем
    if (isTelegramPage) {
      this.isLoading = false;
      return;
    }

    if (token) {
      try {
        await this.$store.dispatch('auth/GetPlayer');
      } catch (error) {
        localStorage.removeItem('_token');
      }
    }

    this.isLoading = false;
  },
};
</script>