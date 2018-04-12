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

const userModule: Module<State, RootState> = {
  namespaced: true,
  state: {
    user: null,
  },
  actions: {
    loadApplicationData({ dispatch }) {
      return dispatch("loadUser");
    },
    loadUser({ commit }) {
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
        .then(() => dispatch("loadUser"))
        .catch(console.error);
    },
    logout({ commit }) {
      return auth.signOut().then(() => {
        commit("setUser", null);
      });
    },
  },
  mutations: {
    setUser(state, payload: User) {
      state.user = payload;
    },
  },
};

export default userModule;
