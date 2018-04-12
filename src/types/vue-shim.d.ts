import Vue from "vue";
import { Store } from "vuex";

// Add $store and $router to Vue instances
declare module "vue/types/vue" {
  interface Vue {
    $store: Store<any>;
  }
}

declare module "*.vue" {
  export default Vue;
}
