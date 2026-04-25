import axios from 'axios';

window.axios = axios;
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

// Устанавливаем базовый URL для API
// axios.defaults.baseURL = '/api';

// для добавления токена к каждому запросу
axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('_token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

// для обработки 401 ошибки
axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            localStorage.removeItem('_token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axios;