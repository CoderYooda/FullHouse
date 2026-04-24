<template>
  <div class="register-container">
    <div class="register-card">
      <h2>Регистрация</h2>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <input
              type="text"
              v-model="name"
              placeholder="Имя"
              required
              class="form-control"
          />
        </div>
        <div class="form-group">
          <input
              type="text"
              v-model="public_name"
              placeholder="Публичное имя"
              required
              class="form-control"
          />
        </div>
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
        <div class="form-group">
          <input
              type="password"
              v-model="password_confirmation"
              placeholder="Подтверждение пароля"
              required
              class="form-control"
          />
        </div>
        <div class="form-group checkbox">
          <label>
            <input type="checkbox" v-model="agreement" required />
            Я согласен с условиями
          </label>
        </div>
        <button type="submit" class="btn-register" :disabled="isLoading">
          {{ isLoading ? 'Регистрация...' : 'Зарегистрироваться' }}
        </button>
      </form>
      <p class="login-link">
        Уже есть аккаунт?
        <router-link :to="{ name: 'login' }">Войти</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      name: '',
      public_name: '',
      email: '',
      password: '',
      password_confirmation: '',
      agreement: false,
      isLoading: false,
    };
  },
  methods: {
    async handleRegister() {
      this.isLoading = true;
      try {
        const response = await axios.post('/api/register', {
          name: this.name,
          public_name: this.public_name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
          agreement: this.agreement,
        });

        // Сохраняем email для страницы подтверждения
        localStorage.setItem('register_email', this.email);

        // Переходим на страницу подтверждения
        this.$router.push({
          name: 'verify-email',
          params: { email: this.email }
        });
      } catch (error) {
        const message = error.response?.data?.message || 'Ошибка регистрации';
        alert(message);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
.register-card {
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
.checkbox {
  display: flex;
  align-items: center;
}
.checkbox label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
.btn-register {
  width: 100%;
  padding: 10px;
  background: #764ba2;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
.btn-register:hover:not(:disabled) {
  background: #5a3a7a;
}
.btn-register:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
.login-link {
  text-align: center;
  margin-top: 1rem;
}
.login-link a {
  color: #764ba2;
  text-decoration: none;
}
.login-link a:hover {
  text-decoration: underline;
}
</style>