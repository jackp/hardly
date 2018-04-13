import Vue from "vue";
import Vuex from "vuex";

import data, { State as DataState } from "./modules/data";
import session, { State as SessionState } from "./modules/session";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export interface RootState {
  session: SessionState;
  data: DataState;
}

export default new Vuex.Store({
  modules: {
    data,
    session,
  },
  strict: debug,
});
