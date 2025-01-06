import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style.css'

import axios from 'axios';
createApp(App).use(router).mount('#app');

// Функция для получения CSRF-токена из куки
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

// Настройка Axios для включения CSRF-токена в заголовки
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';