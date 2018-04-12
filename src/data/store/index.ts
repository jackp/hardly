import Vue from "vue";
import Vuex from "vuex";

import session, { State as SessionState } from "./modules/session";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export interface RootState {
  session: SessionState;
}

export default new Vuex.Store({
  modules: {
    session,
  },
  strict: debug,
});
