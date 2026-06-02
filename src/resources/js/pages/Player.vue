<template>
  <div class="content">
    <ChangeNameModal/>
    <div class="boxed p-relative">
      <button @click="logout" class="logout-button" v-if="!isTelegramApp">
        Выйти из аккаунта
      </button>

      <div class="avatar_guard">
        <img class="player_avatar" :src="user.photo_url || '/img/default-avatar-152.png'">
      </div>
      <div class="player_name">{{ user.name }}</div>
      <div class="public_name_title">Игровой никнейм</div>
      <div class="player_login">{{ user.public_name }}</div>
      <div class="change_name_button"><button @click="openChangeNameModal">Изменить никнейм</button></div>

      <div class="module">
        <div class="city-selector row">
          <span @click="openCitySelector" class="change-city-button">
              Сменить город ({{ currentCityName }})
          </span>
        </div>
      </div>

      <div class="module">
        <!-- Привязка email (для пользователей с фейковым email) -->
        <div class="email-link-section" v-if="!user.email_verified_at && user.email && user.email.includes('@telegram.com')">
          <label class="form-label">Привязать Email</label>
          <div v-if="!showEmailCodeForm" class="row row-column g-5">
            <input type="email" v-model="linkEmail" placeholder="Введите email" class="form-control" />
            <input type="password" v-model="linkPassword" placeholder="Придумайте пароль" class="form-control" />
            <input type="password" v-model="linkPasswordConfirmation" placeholder="Подтвердите пароль" class="form-control" />
            <button @click="sendLinkEmail" class="btn-default">Привязать</button>
          </div>

          <div v-else class="row row-form">
            <input type="text" v-model="emailCode" placeholder="Код из письма" class="form-control" />
            <button @click="verifyLinkEmail" class="btn-default">Подтвердить</button>
          </div>
        </div>

        <!-- Привязка Telegram (для email-пользователей) -->
        <div class="telegram-link-section" v-if="!isTelegramApp && !user.telegram_user_id">
          <div id="telegram-link-widget"></div>
        </div>
      </div>

      <div class="module">
        <div class="user-split-card">
          <div class="user-card" style="margin-bottom: 0">
            <div class="card-header">
              ID Профиля
            </div>
            <span class="text-gray">{{ user.id }}</span>
          </div>
          <div class="user-card" style="margin-bottom: 0">
            <div class="card-header">
              Регистрация
            </div>
            <span class="text-gray">{{ formatDate(user.created_at) }}</span>
          </div>
        </div>
        <div class="view-agreement-row">
          <router-link :to="{ name: 'agreement', params: { slug: $route.params.slug } }" class="view-agreement-button">
            Просмотреть соглашение
          </router-link>
        </div>
      </div>
      <Tournament/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import ChangeNameModal from '../pages/Player/ChangeNameModal.vue';
import Tournament from '../pages/Player/Tournament.vue';

export default {
  components: { Tournament, ChangeNameModal },
  data() {
    return {
      tournaments: [],
      linkEmail: '',
      linkPassword: '',
      linkPasswordConfirmation: '',
      emailCode: '',
      showEmailCodeForm: false,
    };
  },
  computed: {
    ...mapGetters('auth', ['User']),
    user() {
      return this.User || {};
    },
    currentCityName() {
      const cityId = this.user?.city_id;
      if (cityId === 1) return 'Белгород';
      if (cityId === 2) return 'Воронеж';
      return 'не выбран';
    },
    // Только если приложение открыто внутри Telegram WebApp (через бота)
    isTelegramApp() {
      return !!(window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initData);
    },
  },
  methods: {
    ...mapActions('auth', ['GetPlayer']),
    ...mapMutations('auth', ['setPlayer']),

    loadPlayerData() {
      this.GetPlayer().then((player) => {
        if (player?.agreement === false) {
          this.$router.push({
            slug: window.company_id,
            path: 'agreement',
          });
        }
        this.setPlayer({ player });
      });
    },

    async getTournament() {
      try {
        const { data } = await axios.post('/api/player/tournaments');
        this.tournaments = data.data;
        return true;
      } catch (error) {
        return false;
      }
    },

    openChangeNameModal() {
      this.$store.state.ui._modal_change_player_name = true;
    },

    openCitySelector() {
      this.$store.commit('ui/SET_SHOW_CITY_SELECTOR', true);
    },

    formatDate(dateString) {
      if (!dateString) return '—';
      const date = new Date(dateString);
      return date.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
    },

    logout() {
      localStorage.removeItem('_token');
      this.$store.commit('auth/LOGOUT');
      this.$router.push('/login');
    },

    async sendLinkEmail() {
      if (this.linkPassword !== this.linkPasswordConfirmation) {
        alert('Пароли не совпадают');
        return;
      }
      if (this.linkPassword.length < 8) {
        alert('Пароль должен быть не менее 8 символов');
        return;
      }
      try {
        await axios.post('/api/link-email', {
          email: this.linkEmail,
          password: this.linkPassword,
          password_confirmation: this.linkPasswordConfirmation,
        });
        this.showEmailCodeForm = true;
        alert('Код отправлен на email');
      } catch (error) {
        alert(error.response?.data?.message || 'Ошибка');
      }
    },

    async verifyLinkEmail() {
      if (this.linkPassword !== this.linkPasswordConfirmation) {
        alert('Пароли не совпадают');
        return;
      }
      try {
        await axios.post('/api/verify-link-email', {
          email: this.linkEmail,
          code: this.emailCode,
          password: this.linkPassword,
          password_confirmation: this.linkPasswordConfirmation,
        });
        alert('Email привязан');
        await this.$store.dispatch('auth/GetPlayer');
        await this.getTournament();
        this.showEmailCodeForm = false;
        this.linkEmail = '';
        this.linkPassword = '';
        this.linkPasswordConfirmation = '';
        this.emailCode = '';
      } catch (error) {
        alert(error.response?.data?.message || 'Неверный код');
      }
    },

    initTelegramLinkWidget() {
      const container = document.getElementById('telegram-link-widget');
      if (!container) return;

      const botName = process.env.MIX_TELEGRAM_BOT_USERNAME;

      const script = document.createElement('script');
      script.src = 'https://telegram.org/js/telegram-widget.js?22';
      script.async = true;
      script.setAttribute('data-telegram-login', botName);
      script.setAttribute('data-size', 'large');
      script.setAttribute('data-onauth', 'onTelegramBindAuth');
      container.appendChild(script);

      window.onTelegramBindAuth = (user) => {
        this.handleTelegramBind(user);
      };
    },

    async handleTelegramBind(user) {
      console.log('Привязка Telegram', user);
      try {
        const { data } = await axios.post('/api/link-telegram', user);
        alert(data.message || 'Telegram привязан');
        await this.$store.dispatch('auth/GetPlayer');
        await this.getTournament();
      } catch (error) {
        alert(error.response?.data?.message || 'Ошибка привязки');
      }
    },
  },
  async mounted() {
    if (!this.isTelegramApp) {
      this.initTelegramLinkWidget();
    }

    this.loadPlayerData();
    this.getTournament();
  },
};
</script>

<style>
.logout-button {
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  background-color: #dc3545;
  color: white;
  position: absolute;
  top: 0;
  right: 0;
}
.logout-button:hover {
  background-color: #c82333;
}
.view-agreement-row {
  margin-bottom: 1rem;
}
.view-agreement-button {
  padding: 0.5rem 1rem;
  font-size: 0.95rem;
  color: #68627d;
  text-decoration: none;
  border-radius: 15px;
  transition: background-color 0.2s, color 0.2s;
  border: 1px solid rgba(59, 58, 65, 0.6588235294);
  background: rgba(24, 23, 28, 0.431372549);
  text-align: center;
  display: block;
  margin: 20px auto 0;
}
.view-agreement-button:hover {
  background-color: #0066cc;
  color: white;
}
.change-city-button {
  background: #EDB258;
  border: 0;
  padding: 5px 10px;
  border-radius: 4px;
  margin: 0 auto;
  display: block;
  color: #000000;
  cursor: pointer;
}
</style>