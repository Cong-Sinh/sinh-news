import { createRouter, createWebHistory } from "vue-router";
import HomeScreen from "@/pages/HomeScreen/HomeScreen.vue";
import NewsDetails from "@/pages/Detail/Detail.vue";
// const NewsDetails = () => import("@/pages/NewsDetails.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeScreen,
  },
  {
    path: "/news/:id",
    name: "newsDetail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: NewsDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
