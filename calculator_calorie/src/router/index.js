import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import DataInput from '../components/DataInput.vue';
import Results from '../components/Results.vue';
import History from '../components/History.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/register', component: Register },
  { path: '/data-input', component: DataInput },
  { path: '/results', component: Results },
  { path: '/history', component: History },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;