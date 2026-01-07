import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Index from "../pages/Index.vue";
import TeamPage from "../pages/TeamPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import UserInfoPage from "../pages/UserInfoPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Index,
  },
  {
    path: "/team",
    name: "team",
    component: TeamPage,
  },
  {
    path: "/user",
    name: "user",
    component: UserInfoPage,
  },
  {
    path: "/search",
    name: "search",
    component: SearchPage,
  },
  {
    path: "/user/edit",
    name: "user_edit",
    component: UserEditPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;