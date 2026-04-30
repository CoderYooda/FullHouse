<template>
  <div class="telegram-container">
    <div class="telegram-card">
      <div v-if="isLoading" class="loading-spinner">
        Авторизация через Telegram...
      </div>
      <div v-else-if="error" class="error-message">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import axios from 'axios';

export default {
  name: 'LoginTelegram',
  data() {
    return {
      isLoading: true,
      error: null,
    };
  },


  methods: {
    setAxiosAuthHeader(token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },

    async handleTelegramLogin(initData) {
      this.isLoading = true;
      try {
        const { data } = await axios.post('/api/telegram-login', {
          init_data: initData,  // ← отправляем всю строку initData
        });

        localStorage.setItem('_token', data.token);
        this.$store.commit('auth/SET_TOKEN', data.token);
        this.$store.commit('auth/SET_USER', data.user);

        this.setAxiosAuthHeader(data.token);
        this.$router.push({
          name: 'player_telegram',
          params: { slug: this.$route.params.slug || window.Slug || 'blg' }
        });
      } catch (error) {
        console.error(error);
        this.error = error.response?.data?.message || 'Ошибка входа через Telegram';
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    const webApp = window.Telegram?.WebApp;
    if (webApp?.initData) {
      // Отправляем на сервер строку initData
      this.handleTelegramLogin(webApp.initData);
    } else {
      this.error = 'Интерфейс доступен только через Telegram MiniApp';
      this.isLoading = false;
    }
  },


  // methods: {
  //   ...mapActions('auth', ['TelegramAuth']),
  //   ...mapMutations('auth', ['setToken']),
  //
  //   async handleTelegramAuth(initData) {
  //     try {
  //       const { data } = await axios.post('/api/telegram-login', { query: initData });
  //       const token = data.token;
  //
  //       if (token) {
  //         this.setToken({ token });
  //         axios.interceptors.request.use(
  //             config => {
  //               config.headers['Authorization'] = 'Bearer ' + token;
  //               return config;
  //             },
  //             error => Promise.reject(error)
  //         );
  //
  //         await this.$store.dispatch('auth/GetPlayer');
  //         const slug = this.$route.params.slug || window.Slug || 'blg';
  //         this.$router.push({ name: 'player_telegram', params: { slug } });
  //       } else {
  //         this.error = 'Авторизация Telegram невалидна ПОЧАМУТО';
  //       }
  //     } catch (error) {
  //       this.error = 'Ошибка авторизации Telegram ПОЧАМУТО';
  //       console.error(error);
  //     } finally {
  //       this.isLoading = false;
  //     }
  //   },
  // },
  // mounted() {
  //   if (this.$store.state._isLocalMode) {
  //     let demoData = 'user=%7B%22id%22%3A1269912109%2C%22first_name%22%3A%22%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9%22%2C%22last_name%22%3A%22%D0%A1%D0%B5%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D0%BE%D0%B2%22%2C%22username%22%3A%22CoderYooda%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F4Ibo9h0jE4a39r-pfAxX2DWy6ZlNY_6FQSXPyWev1Zs.svg%22%7D&chat_instance=1349348516244071242&chat_type=sender&auth_date=1765537954&signature=_xZs17QSBhLVzgDzZAgUou-7x2ji3iEEqb-VXnA73ST2dgooIm5kO_o-kpZ6WQho9FX3IpeSzfqFsQ-ACtzPBA&hash=f4490316b56498ce3203de449b44de0e197bf0523bd97cbf4054fb745865df23';
  //     this.handleTelegramAuth(demoData);
  //   } else if (window.Telegram?.WebApp?.initData) {
  //     this.handleTelegramAuth(window.Telegram.WebApp.initData);
  //   } else {
  //     this.error = 'Интерфейс доступен только через Telegram MiniApp';
  //     this.isLoading = false;
  //   }
  // },
};
</script>

<style scoped>
.telegram-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
.telegram-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
}
.loading-spinner {
  color: #667eea;
  font-size: 16px;
}
.error-message {
  color: red;
  font-size: 14px;
}
</style>