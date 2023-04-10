import { createRouter, createWebHistory } from 'vue-router';
import HomeScreen from '@/pages/HomeScreen/HomeScreen.vue';
import NewsDetails from '@/pages/Detail/Detail.vue';
import shortVideo from '@/pages/HomeShare/Share.vue';

// const NewsDetails = () => import("@/pages/NewsDetails.vue");

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeScreen,
  },
  {
    path: '/news/:id',
    name: 'newsDetail',
    component: NewsDetails,
  },
  {
    path: '/shortVideo',
    name: 'shortVideo',
    component: shortVideo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
