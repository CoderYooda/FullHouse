<template>
  <div class="login-container">
    <div class="login-card">
      <h2>Вход в систему</h2>

      <form @submit.prevent="handleEmailLogin">
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
        <!-- Разделитель -->
        <div class="divider">
          <span>или</span>
        </div>

        <!-- Кнопка входа через Telegram -->
        <div class="telegram-login">
          <div id="telegram-login-widget"></div>
        </div>
      </form>

      <p class="register-link">
        Нет аккаунта?
        <router-link :to="{ name: 'register' }">Зарегистрироваться</router-link>
      </p>
    </div>
  </div>
  <div class="body-backdrop" style="background-position-y: 0"></div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginWeb',
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
    };
  },
  mounted() {
    this.initTelegramWidget();
  },
  methods: {
    initTelegramWidget() {
      // Проверяем, что виджет ещё не загружен
      const widgetContainer = document.getElementById('telegram-login-widget');
      if (!widgetContainer || widgetContainer.innerHTML !== '') {
        return;
      }

      // Убедитесь, что у вас есть эти переменные в .env или window
      const botName = 'test_fullhouse_bot'; // Имя вашего бота (без @)
      const redirectUrl = 'https://fhpc-test.ru/auth/telegram'; // Абсолютный URL для редиректа

      const script = document.createElement('script');
      script.src = 'https://telegram.org/js/telegram-widget.js?22';
      script.async = true;
      script.setAttribute('data-telegram-login', botName);
      script.setAttribute('data-size', 'large');
      script.setAttribute('data-radius', '8');
      script.setAttribute('data-request-access', 'write');
      script.setAttribute('data-userpic', 'true');
      script.setAttribute('data-auth-url', redirectUrl); // Важно!
      script.setAttribute('data-onauth', 'onTelegramAuth(user)');

      widgetContainer.appendChild(script);

      // Глобальная функция для обработки авторизации
      window.onTelegramAuth = (user) => {
        this.handleTelegramLogin(user);
      };
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
        this.$router.push({ name: 'player' });
      } catch (error) {
        alert('Ошибка входа через Telegram');
      } finally {
        this.isLoading = false;
      }
    },

    setAxiosAuthHeader(token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    async handleEmailLogin() {
      this.isLoading = true;
      try {
        const { data } = await axios.post('/api/login', {
          email: this.email,
          password: this.password,
        });

        localStorage.setItem('_token', data.token);
        this.$store.commit('auth/SET_TOKEN', data.token);
        this.$store.commit('auth/SET_USER', data.user);

        this.$router.push({ name: 'player' });
      } catch (error) {
        const message = error.response?.data?.message || 'Ошибка входа';
        alert(message);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.login-card {
  background: linear-gradient(180deg, #2A2A32 0%, #17161C 100%);
  border: 1px solid #3C3A42;
  padding: 2rem;
  border-radius: 40px;
  text-align: center;
  width: 100%;
  max-width: 400px;
}
.form-group {
  margin-bottom: 1rem;
}
.form-control {
  color: #fff;
  width: 100%;
  padding: 13px 15px;
  background: #18171C;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  line-height: 24px;
  box-sizing: border-box;
}
.btn-login {
  padding: 10px 20px;
  font-size: 16px;
  line-height: 150%;
  font-weight: 700;
  cursor: pointer;
  border-radius: 40px;
  color: #513409;
  background: linear-gradient(90deg, #F9C888 0%, #7A551E 100%), linear-gradient(90deg, rgba(176, 127, 52, 0.5) 52.5%, rgba(249, 200, 136, 0.5) 100%);
  border: 1px solid #F3CD93;
  width: 100%;
}
.btn-login:hover:not(:disabled) {
  background: linear-gradient(270deg, #F9C888 0%, #7A551E 100%), linear-gradient(90deg, rgba(176, 127, 52, 0.5) 52.5%, rgba(249, 200, 136, 0.5) 100%);
}
.register-link {
  text-align: center;
  margin-top: 1rem;
}
.register-link a {
  color: #cea164;
  text-decoration: none;
}
</style>