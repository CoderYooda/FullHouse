<template>
  <div class="login-container">
    <div class="login-card">
      <h2>Вход в систему</h2>

      <!-- Email форма (для web-режима) -->
      <form v-if="!shouldUseTelegramAuth" @submit.prevent="handleEmailLogin">
        <div class="form-group">
          <input
              type="email"
              v-model="email"
              placeholder="Email"
              required
              class="form-control"
          />
        </div>
        <div class="form-group">
          <input
              type="password"
              v-model="password"
              placeholder="Пароль"
              required
              class="form-control"
          />
        </div>
        <button type="submit" class="btn-login" :disabled="isLoading">
          {{ isLoading ? 'Вход...' : 'Войти' }}
        </button>
      </form>

      <!-- Telegram авторизация (только для Telegram-режима) -->
      <div v-else class="telegram-auth">
        <div class="loading-spinner" v-if="isLoading">
          Авторизация через Telegram...
        </div>
        <div v-else-if="error" class="error-message">
          {{ error }}
        </div>
      </div>

      <p class="register-link" v-if="!shouldUseTelegramAuth">
        Нет аккаунта?
        <router-link :to="{ name: 'register' }">Зарегистрироваться</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
      error: null,
    };
  },
  computed: {
    ...mapGetters('auth', ['Authenticated', 'Token']),
    isAuthenticated() {
      return this.$store.state.auth?._authenticated === true && localStorage.getItem('_token');
    },
    // Определяем, нужно ли использовать Telegram-авторизацию
    shouldUseTelegramAuth() {
      // Только если есть реальные данные от Telegram WebApp
      // И явно не web-режим
      const hasTelegramData = window.Telegram?.WebApp?.initData && window.Telegram.WebApp.initData !== '';
      const isTelegramPath = this.$route.path.startsWith('/telegram/');

      // Не используем Telegram-авторизацию, если это web-режим (через window.IsWeb)
      if (window.IsWeb === true) {
        return false;
      }

      return hasTelegramData || isTelegramPath || this.$store.state._isLocalMode;
    },
  },
  methods: {
    ...mapActions('auth', ['TelegramAuth']),
    ...mapMutations('auth', ['setToken']),

    // Email-авторизация (для web-режима)
    async handleEmailLogin() {
      this.isLoading = true;
      this.error = null;

      try {
        const { data } = await axios.post('/api/login', {
          email: this.email,
          password: this.password,
        });

        localStorage.setItem('_token', data.token);
        this.setToken({ token: data.token });
        this.$store.commit('auth/SET_USER', data.user);

        // Редирект на страницу игрока
        this.$router.push({ name: 'player' });
      } catch (error) {
        this.error = error.response?.data?.message || 'Ошибка входа';
        alert(this.error);
      } finally {
        this.isLoading = false;
      }
    },

    // Telegram-авторизация
    async handleTelegramAuth(initData) {
      this.isLoading = true;
      this.error = null;

      try {
        const token = await this.TelegramAuth(initData);
        if (token) {
          this.setToken({ token });
          this.$store.state.loaded = true;

          // Настраиваем axios интерсептор
          axios.interceptors.request.use(
              config => {
                config.headers['Authorization'] = 'Bearer ' + token;
                return config;
              },
              error => {
                console.log("TokenSetError", error);
                return Promise.reject(error);
              }
          );

          // Получаем данные пользователя
          await this.$store.dispatch('auth/GetPlayer');

          // Редирект с учётом slug
          const slug = this.$route.params.slug || window.Slug || 'blg';
          this.$router.push({ name: 'player', params: { slug } });
        } else {
          this.error = 'Авторизация Telegram невалидна';
          alert(this.error);
        }
      } catch (error) {
        this.error = 'Ошибка авторизации Telegram';
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    // Проверяем, есть ли уже токен
    if (this.isAuthenticated) {
      this.$router.push({ name: 'player', params: { slug: this.$route.params.slug || window.Slug } });
      return;
    }

    // Только если нужно использовать Telegram-авторизацию
    if (this.shouldUseTelegramAuth) {
      // Локальный режим для тестирования
      if (this.$store.state._isLocalMode) {
        let demoData = 'user=%7B%22id%22%3A1269912109%2C%22first_name%22%3A%22%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9%22%2C%22last_name%22%3A%22%D0%A1%D0%B5%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D0%BE%D0%B2%22%2C%22username%22%3A%22CoderYooda%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F4Ibo9h0jE4a39r-pfAxX2DWy6ZlNY_6FQSXPyWev1Zs.svg%22%7D&chat_instance=1349348516244071242&chat_type=sender&auth_date=1765537954&signature=_xZs17QSBhLVzgDzZAgUou-7x2ji3iEEqb-VXnA73ST2dgooIm5kO_o-kpZ6WQho9FX3IpeSzfqFsQ-ACtzPBA&hash=f4490316b56498ce3203de449b44de0e197bf0523bd97cbf4054fb745865df23';
        this.handleTelegramAuth(demoData);
      }
      // Реальный Telegram WebApp
      else if (window.Telegram?.WebApp?.initData) {
        this.handleTelegramAuth(window.Telegram.WebApp.initData);
      }
      // Если нет данных Telegram, но режим Telegram – ошибка
      else if (this.$route.path.startsWith('/telegram/')) {
        this.error = 'Интерфейс доступен только через Telegram MiniApp';
        alert(this.error);
      }
    }
    // Web-режим: форма уже показана (v-else)
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
.login-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
}
.form-group {
  margin-bottom: 1rem;
}
.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  box-sizing: border-box;
}
.btn-login {
  width: 100%;
  padding: 10px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
.btn-login:hover:not(:disabled) {
  background: #5a67d8;
}
.btn-login:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
.register-link {
  text-align: center;
  margin-top: 1rem;
}
.register-link a {
  color: #667eea;
  text-decoration: none;
}
.register-link a:hover {
  text-decoration: underline;
}
.telegram-auth {
  text-align: center;
  padding: 20px;
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