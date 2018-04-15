import Vue from "vue";
import Vuex from "vuex";

import organizations, {
  State as OrganizationsState,
} from "./modules/organizations";
import session, { State as SessionState } from "./modules/session";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export interface RootState {
  session: SessionState;
  organizations: OrganizationsState;
}

export default new Vuex.Store({
  modules: {
    organizations,
    session,
  },
  strict: debug,
});
