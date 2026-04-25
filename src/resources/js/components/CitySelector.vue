<template>
  <div v-if="visible" class="city-selector-overlay">
    <div class="city-selector-modal">
      <h3>Выберите ваш город</h3>
      <div class="city_btn_list row">
        <button @click="selectCity(1)" class="city_btn">Белгород</button>
        <button @click="selectCity(2)" class="city_btn">Воронеж</button>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['city-selected'],
  methods: {
    async selectCity(cityId) {
      try {
        // Сохраняем город
        await axios.post('/api/set-city', { city_id: cityId });

        // Обновляем данные пользователя в store
        const { data } = await axios.get('/api/me');
        console.log('User after city save:', data);  // ← Добавить
        this.$store.commit('auth/SET_USER', data);
        console.log('Store user after commit:', this.$store.state.auth.user);  // ← Добавить

        // Закрываем модалку
        this.$emit('city-selected');
      } catch (error) {
        console.error('Ошибка сохранения города', error);
      }
    },
  },
};
</script>


<style scoped>
.city-selector-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.city-selector-modal {
  background: linear-gradient(180deg, #2A2A32 0%, #17161C 100%);
  border: 1px solid #3C3A42;
  padding: 2rem;
  border-radius: 40px;
  text-align: center;

  h3 {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 20px;
    margin-top: 0;
  }
}

.city_btn_list {
  flex-direction: column;
  gap: 5px;
}
.city_btn {
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

</style>