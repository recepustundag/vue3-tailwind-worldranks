import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/HomePage.vue";
import Details from "../pages/Details.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/country/:id",
    name: "Details",
    component: Details,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;