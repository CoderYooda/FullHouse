<template>
  <div v-if="visible" class="city-selector-overlay">
    <div class="city-selector-modal">
      <h3>Выберите ваш город</h3>
      <button @click="selectCity(1)" class="city-btn">Белгород</button>
      <button @click="selectCity(2)" class="city-btn">Воронеж</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['visible'],
  methods: {
    async selectCity(cityId) {
      try {
        await axios.post('/api/set-city', {city_id: cityId});
        // Обновляем данные пользователя
        const {data} = await axios.get('/api/me');
        this.$store.commit('auth/SET_USER', data);
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
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
}

.city-btn {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
}

.city-btn:hover {
  background-color: #0056b3;
}
</style>