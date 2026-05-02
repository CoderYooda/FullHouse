<template>
  <div class="content">
    <ChangeNameModal/>
    <div class="boxed">
      <div class="avatar_guard">
        <img class="player_avatar" :src="user.photo_url || '/images/default-avatar.png'">
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
        <div class="logout-row" v-if="!isTelegramMode">
          <button @click="logout" class="logout-button">
            Выйти из аккаунта
          </button>
        </div>
      </div>

      <div class="module">
        <!-- Привязка email (для Telegram-пользователей) -->
        <div class="email-link-section" v-if="isTelegramMode && (!user.email || user.email.includes('@telegram.com'))">
          <div v-if="!showEmailCodeForm">
            <input type="email" v-model="linkEmail" placeholder="Введите email" class="form-control" />
            <button @click="sendLinkEmail" class="btn-link">Привязать email</button>
          </div>
          <div v-else>
            <input type="text" v-model="emailCode" placeholder="Код из письма" class="form-control" />
            <button @click="verifyLinkEmail" class="btn-link">Подтвердить</button>
          </div>
        </div>

        <!-- Привязка Telegram (для email-пользователей) -->
        <div class="telegram-link-section" v-if="!isTelegramMode && !user.telegram_user_id">
          <div id="telegram-link-widget"></div>
        </div>
      </div>

      <div class="module">
        <!-- Привязка email (для Telegram-пользователей) -->
        <div class="email-link-section" v-if="isTelegramMode && (!user.email || user.email.includes('@telegram.com'))">
          <div v-if="!showEmailCodeForm">
            <input type="email" v-model="linkEmail" placeholder="Введите email" class="form-control" />
            <button @click="sendLinkEmail" class="btn-link">Привязать email</button>
          </div>
          <div v-else>
            <input type="text" v-model="emailCode" placeholder="Код из письма" class="form-control" />
            <button @click="verifyLinkEmail" class="btn-link">Подтвердить</button>
          </div>
        </div>

        <!-- Привязка Telegram (для email-пользователей) -->
        <div class="telegram-link-section" v-if="!isTelegramMode && !user.telegram_user_id">
          <div id="telegram-bind-widget"></div>
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
    isTelegramMode1() {
      return !!window.Telegram?.WebApp?.initData;
    },
    isTelegramMode() {
      // Если есть объект Telegram.WebApp и внутри него initData — значит мы в Telegram
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
      try {
        await axios.post('/api/link-email', { email: this.linkEmail });
        this.showEmailCodeForm = true;
        alert('Код отправлен на email');
      } catch (error) {
        alert(error.response?.data?.message || 'Ошибка');
      }
    },

    async verifyLinkEmail() {
      try {
        await axios.post('/api/verify-link-email', {
          email: this.linkEmail,
          code: this.emailCode,
        });
        alert('Email привязан');
        await this.$store.dispatch('auth/GetPlayer');
        this.showEmailCodeForm = false;
        this.linkEmail = '';
        this.emailCode = '';
      } catch (error) {
        alert('Неверный код');
      }
    },

    initTelegramLinkWidget() {
      const container = document.getElementById('telegram-bind-widget');
      if (!container) return;

      const script = document.createElement('script');
      script.src = 'https://telegram.org/js/telegram-widget.js?22';
      script.async = true;
      script.setAttribute('data-telegram-login', 'test_fullhouse_bot');
      script.setAttribute('data-size', 'large');
      script.setAttribute('data-onauth', 'onTelegramBindAuth');
      container.appendChild(script);

      window.onTelegramBindAuth = async (user) => {
        try {
          const { data } = await axios.post('/api/link-telegram', {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            photo_url: user.photo_url,
            auth_date: user.auth_date,
            hash: user.hash,
          });
          alert(data.message || 'Telegram привязан');
          await this.$store.dispatch('auth/GetPlayer');
        } catch (error) {
          const msg = error.response?.data?.message || 'Ошибка привязки';
          alert(msg);
        }
      };
    },
  },
  async mounted() {
    // Если есть данные от Telegram и нет токена — авторизуемся
    if (window.Telegram?.WebApp?.initData && !localStorage.getItem('_token')) {
      await this.telegramAuth();
    }

    if (!this.isTelegramMode) {
      this.initTelegramLinkWidget();
    }

    this.loadPlayerData();
    this.getTournament();
  },
};
</script>

<style>
.logout-button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  background-color: #dc3545;
  color: white;
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
