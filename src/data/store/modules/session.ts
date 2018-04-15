/**
 * Session State
 */
import { Action, Module } from "vuex";

import { auth, db } from "data/firebase";
import { RootState } from "data/store";
import { User } from "types/models/user";

export interface State {
  user: User | null;
}

const sessionModule: Module<State, RootState> = {
  state: {
    user: null,
  },
  actions: {
    async loadApplicationData({ dispatch }) {
      await dispatch("loadCurrentUser");
      await dispatch("organizations/load");
    },
    loadCurrentUser({ commit }) {
      if (auth.currentUser) {
        return db
          .collection("users")
          .doc(auth.currentUser.uid)
          .get()
          .then((doc) => {
            return commit("setUser", {
              id: doc.id,
              ...doc.data(),
            });
          });
      }
    },
    login({ dispatch }, payload) {
      const { email, password } = payload;
      return auth
        .signInWithEmailAndPassword(email, password)
        .then(() => dispatch("loadCurrentUser"))
        .catch(console.error);
    },
    logout({ commit }) {
      return auth.signOut().then(() => {
        commit("setUser", null);
      });
    },
  },
  mutations: {
    setUser(state, payload: User | null) {
      state.user = payload;
    },
  },
};

export default sessionModule;
