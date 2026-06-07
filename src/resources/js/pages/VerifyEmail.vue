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
  <div class="body-backdrop" style="background-position-y: 0"></div>
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
}
.verify-card {
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
.btn-verify {
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
.btn-verify:hover:not(:disabled) {
  background: linear-gradient(270deg, #F9C888 0%, #7A551E 100%), linear-gradient(90deg, rgba(176, 127, 52, 0.5) 52.5%, rgba(249, 200, 136, 0.5) 100%);
}
.resend-link {
  margin-top: 1rem;
  font-size: 14px;
}
.resend-btn {
  background: none;
  border: none;
  color: #cea164;
  cursor: pointer;
  text-decoration: underline;
}
.resend-btn:hover:not(:disabled) {
  color: #cea164;
}
.login-link {
  margin-top: 1rem;
}
.login-link a {
  color: #cea164;
  text-decoration: none;
}
</style>