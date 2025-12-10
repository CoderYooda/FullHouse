import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import axios from "axios";

window.axios = axios;

document.addEventListener('DOMContentLoaded', function() {
    let app = createApp(App)
    .use(store)
    .use(router);

    app.mount('#app');
});