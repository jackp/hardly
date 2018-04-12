import Vue from "vue";

import App from "App.vue";
import { auth } from "data/firebase";
import store from "data/store";
import router from "router";

const vm = new Vue({
  router,
  store,
  render: (h) => h(App),
});

// Check authentication status before loading App
const unsubscribe = auth.onAuthStateChanged(() => {
  vm.$mount("#app");
  unsubscribe();
});
