<template>
  <div class="telegram-container">
    <div class="telegram-card">

      <div class="preloader">
        <div class="blur-overlay"></div>
        <div class="logo"></div>
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

    async handleTelegramLogin(user) {

      this.isLoading = true;
      try {
        const { data } = await axios.post('/api/telegram-login', {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          username: user.username,
          photo_url: user.photo_url,
          auth_date: user.auth_date,
          hash: user.hash,
        });

        localStorage.setItem('_token', data.token);
        this.$store.commit('auth/SET_TOKEN', data.token);
        this.$store.commit('auth/SET_USER', data.user);

        this.setAxiosAuthHeader(data.token);
        this.$router.push('/player');
      } catch (error) {
        // console.error(error);
        this.error = error.response?.data?.message || 'Ошибка входа через Telegram';
      } finally {
        this.isLoading = false;
      }
    },


  },
  mounted() {
    if (window.Telegram?.WebApp?.initData) {
      const initData = window.Telegram.WebApp.initData;
      let user = window.Telegram.WebApp.initDataUnsafe?.user;

      const decodedString = decodeURIComponent(initData);

//Превращаем строку в объект URLSearchParams
      const params = new URLSearchParams(decodedString);

//Создаём итоговый объект
      const result = {};

//Проходим по всем параметрам
      for (const [key, value] of params) {
        // Если это поле user, превращаем его строку в настоящий объект
        if (key === 'user') {
          try {
            result.user = JSON.parse(value);
          } catch (e) {
            console.error('Ошибка парсинга user:', e);
            result.user = value;
          }
        } else {
          result[key] = value;
        }
      }

      user = result.user;

      if (user && user.id) {
        const data = {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          username: user.username,
          photo_url: user.photo_url,
          auth_date: result.auth_date,
          hash: result.hash
        };

        this.handleTelegramLogin(data);
      } else {
        this.error = 'Не удалось получить данные пользователя';
        this.isLoading = false;
      }
    } else {
      this.error = 'Интерфейс доступен только через Telegram MiniApp';
      this.isLoading = false;
    }
  },



  // mounted() {
  //   if (window.Telegram?.WebApp?.initData) {
  //     const initData = window.Telegram.WebApp.initData;
  //     const user = window.Telegram.WebApp.initDataUnsafe?.user;
  //
  //     if (user && user.id) {
  //       const data = {
  //         id: user.id,
  //         first_name: user.first_name,
  //         last_name: user.last_name,
  //         username: user.username,
  //         photo_url: user.photo_url,
  //         auth_date: window.Telegram.WebApp.initDataUnsafe?.auth_date,
  //         hash: window.Telegram.WebApp.initDataUnsafe?.hash
  //       };
  //       console.log('ПОЛЬЗОВАТЕЛЬ', window.Telegram.WebApp.initDataUnsafe)
  //       console.log('приветики', data)
  //       console.log('приветики2', initData)
  //
  //       this.handleTelegramLogin(data);
  //     } else {
  //       this.error = 'Не удалось получить данные пользователя';
  //       this.isLoading = false;
  //     }
  //   } else {
  //     this.error = 'Интерфейс доступен только через Telegram MiniApp';
  //     this.isLoading = false;
  //   }
  // }

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
  position: relative;
  width: 100%;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #2A2A32 0%, #17161C 100%);
}

.blur-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%);
  backdrop-filter: blur(10px);
}

.logo {
  position: relative;
  width: 150px;
  height: 150px;
  background-image: url('/img/logo.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10;
}

.telegram-card {
  position: relative;
  z-index: 10;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
}

.error-message {
  color: red;
  font-size: 14px;
}
</style>