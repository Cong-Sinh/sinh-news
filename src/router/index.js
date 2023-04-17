import { createRouter, createWebHistory } from 'vue-router';
import HomeScreen from '@/pages/HomeScreen/HomeScreen.vue';
import NewsDetails from '@/pages/Detail/Detail.vue';
import shortVideo from '@/pages/HomeShare/Share.vue';
import Page404 from '@/pages/404.vue';

// const NewsDetails = () => import("@/pages/NewsDetails.vue");

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeScreen,
  },
  {
    path: '/feed/:id',
    name: 'newsDetail',
    component: NewsDetails,
  
  },
  {
    path: '/shortVideo',
    name: 'shortVideo',
    component: shortVideo,
  },
  {
    path: '/404',
    name: 'PageNotFound',
    component: Page404
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
