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
      </form>

      <p class="register-link">
        Нет аккаунта?
        <router-link :to="{ name: 'register' }">Зарегистрироваться</router-link>
      </p>
    </div>
  </div>
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
  methods: {
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
.register-link {
  text-align: center;
  margin-top: 1rem;
}
.register-link a {
  color: #667eea;
  text-decoration: none;
}
</style>