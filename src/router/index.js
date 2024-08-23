import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '@/views/AboutView.vue';
import HangmanGame from '../HangmanGame.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hangman',
      component: HangmanGame
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
});

export default router;
