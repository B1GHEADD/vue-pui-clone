import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import WanitaAtasan from "@/views/Wanita/AtasanWanitaView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
    {
      path: "/wanita-atasan",
      name: "WanitaAtasan",
      component: WanitaAtasan,
    },
  ],
});

export default router;
