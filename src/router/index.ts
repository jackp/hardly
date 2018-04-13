import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import store from "data/store";

import IndexPage from "components/pages/IndexPage.vue";
import LoginPage from "components/pages/LoginPage.vue";
import OrganizationCreate from "components/pages/organization/Create.vue";
import OrganizationShow from "components/pages/organization/Show.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  { path: "/", component: IndexPage },
  { path: "/login", component: LoginPage },
  {
    path: "/logout",
    beforeEnter(to, from, next) {
      store.dispatch("session/logout").then(() => next("/"));
    },
  },
  { path: "/create", component: OrganizationCreate },
  { path: "/:org", component: OrganizationShow },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
