<template>
  <div class="verify-container">
    <div class="verify-card">
      <h2>Подтверждение email</h2>
      <p>Код подтверждения отправлен на {{ email }}</p>

      <form @submit.prevent="verifyCode">
        <div class="form-group">
          <input
              type="text"
              v-model="code"
              placeholder="Введите код из письма"
              required
              class="form-control"
              maxlength="6"
          />
        </div>
        <button type="submit" class="btn-verify" :disabled="isLoading">
          {{ isLoading ? 'Проверка...' : 'Подтвердить' }}
        </button>
      </form>

      <p class="resend-link">
        Не пришло письмо?
        <button @click="resendCode" :disabled="isResending" class="resend-btn">
          {{ isResending ? 'Отправка...' : 'Отправить повторно' }}
        </button>
      </p>

      <p class="login-link">
        <router-link :to="{ name: 'login' }">Вернуться ко входу</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'VerifyEmail',
  data() {
    return {
      email: '',
      code: '',
      isLoading: false,
      isResending: false,
    };
  },
  mounted() {
    // Получаем email из параметров или из localStorage
    this.email = this.$route.params.email || localStorage.getItem('register_email') || '';
    if (!this.email) {
      // Если email не передан, редирект на регистрацию
      this.$router.push({ name: 'register' });
    }
  },
  methods: {
    async verifyCode() {
      this.isLoading = true;
      try {
        const { data } = await axios.post('/api/verify-email', {
          email: this.email,
          code: this.code,
        });

        // Сохраняем токен
        localStorage.setItem('_token', data.token);
        this.$store.commit('auth/SET_TOKEN', data.token);
        this.$store.commit('auth/SET_USER', data.user);

        // Редирект на страницу игрока
        this.$router.push({ name: 'player' });
      } catch (error) {
        const message = error.response?.data?.message || 'Неверный код подтверждения';
        alert(message);
      } finally {
        this.isLoading = false;
      }
    },

    async resendCode() {
      this.isResending = true;
      try {
        // Отправляем запрос на повторную отправку кода
        await axios.post('/api/resend-verification', {
          email: this.email,
        });
        alert('Код подтверждения отправлен повторно');
      } catch (error) {
        const message = error.response?.data?.message || 'Ошибка отправки';
        alert(message);
      } finally {
        this.isResending = false;
      }
    },
  },
};
</script>

<style scoped>
.verify-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
.verify-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
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
  text-align: center;
  letter-spacing: 4px;
}
.btn-verify {
  width: 100%;
  padding: 10px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
.btn-verify:hover:not(:disabled) {
  background: #5a67d8;
}
.resend-link {
  margin-top: 1rem;
  font-size: 14px;
}
.resend-btn {
  background: none;
  border: none;
  color: #667eea;
  cursor: pointer;
  text-decoration: underline;
}
.resend-btn:hover:not(:disabled) {
  color: #5a67d8;
}
.login-link {
  margin-top: 1rem;
}
.login-link a {
  color: #764ba2;
  text-decoration: none;
}
</style>