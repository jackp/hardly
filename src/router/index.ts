import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import store from "data/store";

import LoginPage from "components/pages/auth/Login.vue";
import LandingPage from "components/pages/LandingPage.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  { path: "/", component: LandingPage },
  { path: "/login", component: LoginPage },
  {
    path: "/logout",
    beforeEnter(to, from, next) {
      store.dispatch("session/logout").then(() => next("/"));
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
