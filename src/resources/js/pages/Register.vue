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
  <div class="body-backdrop" style="background-position-y: 0"></div>
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
}
.register-card {
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
.btn-register:hover:not(:disabled) {
  background: linear-gradient(270deg, #F9C888 0%, #7A551E 100%), linear-gradient(90deg, rgba(176, 127, 52, 0.5) 52.5%, rgba(249, 200, 136, 0.5) 100%);
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
  color: #cea164;;
  text-decoration: none;
}
.login-link a:hover {
  text-decoration: underline;
}
</style>