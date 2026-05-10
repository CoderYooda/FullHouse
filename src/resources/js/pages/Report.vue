<template>
  <div class="content">
    <div class="boxed">
      <h2 class="page_h2">Обратная связь</h2>
      <div class="module">
        <div>
          <select v-model="topic" class="report_select">
            <option value="1">Проблема с приложением</option>
            <option value="2">Заявить об инциденте</option>
            <option value="3">Предложить идею</option>
          </select>
        </div>
        <div v-if="topic === '2'">
          <label style="margin-bottom: 10px; display: block">Дата и время инцидента</label>
          <input v-model="date" class="report_input_date" type="datetime-local">
        </div>
        <div>
          <textarea placeholder="Опишите ситуацию" v-model="message" rows="12" class="report_textarea" />
        </div>

        <div class="anon_block">
          <label for="anon">Отправить анонимно</label>
          <input v-model="anon" class="report_checkbox" id="anon" type="checkbox" checked>
        </div>
        <div class="anon_block">
          <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
        </div>

        <div @click="send()" class="join-button" :class="{ 'loading': isLoading }" :disabled="isLoading">
          {{ isLoading ? 'Отправка...' : 'Отправить' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let date = new Date();
    let localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);

    return {
      topic: "1",
      date: localDate.toISOString().slice(0, 19),
      message: null,
      anon: false,
      isLoading: false,
      errorMessage: null,
      successMessage: null,
    }
  },
  methods: {
    send() {
      // Валидация
      if (!this.message || this.message.trim() === '') {
        this.errorMessage = 'Пожалуйста, опишите вашу ситуацию';
        setTimeout(() => { this.errorMessage = null; }, 5000);
        return;
      }

      if (this.topic === '2' && !this.date) {
        this.errorMessage = 'Укажите дату и время инцидента';
        setTimeout(() => { this.errorMessage = null; }, 5000);
        return;
      }

      this.sendReport();
    },

    async sendReport() {
      this.isLoading = true;
      this.errorMessage = null;
      this.successMessage = null;

      try {
        const { data } = await axios.post('/api/feedback/create', {
          type: this.topic,
          message: this.message,
          date: this.date,
          is_anon: this.anon,
        });

        if (data.status === 'OK') {
          this.successMessage = 'Ваше обращение принято администрацией';

          // Сброс формы
          let newDate = new Date();
          let localDate = new Date(newDate.getTime() - newDate.getTimezoneOffset() * 60 * 1000);
          this.topic = "1";
          this.date = localDate.toISOString().slice(0, 19);
          this.message = null;
          this.anon = false;

          setTimeout(() => {
            this.successMessage = null;
          }, 5000);
        }
      } catch (error) {
        console.error('Ошибка отправки:', error);
        this.errorMessage = error.response?.data?.message || 'Ошибка при отправке обращения. Попробуйте позже.';
        setTimeout(() => {
          this.errorMessage = null;
        }, 5000);
      } finally {
        this.isLoading = false;
      }
    }
  }
}
</script>

<style scoped>
.join-button {
  cursor: pointer;
  transition: opacity 0.3s;
}

.join-button.loading {
  opacity: 0.6;
  cursor: not-allowed;
}

.join-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error-message {
  margin-top: 15px;
  padding: 10px;
  background: rgba(220, 53, 69, 0.2);
  border: 1px solid #dc3545;
  border-radius: 8px;
  color: #dc3545;
  text-align: center;
}

.success-message {
  margin-top: 15px;
  padding: 10px;
  background: rgba(40, 167, 69, 0.2);
  border: 1px solid #28a745;
  border-radius: 8px;
  color: #28a745;
  text-align: center;
}
</style>