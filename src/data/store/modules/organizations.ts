import Vue from "vue";
import { Action, Module } from "vuex";

import { db } from "data/firebase";
import { RootState } from "data/store";
import { Organization, OrganizationMap } from "types/models/organization";
import { User } from "types/models/user";

export type State = OrganizationMap;

const organizationsModule: Module<State, RootState> = {
  namespaced: true,
  state: {},
  actions: {
    createOrganization({ commit, rootState }, payload) {
      return db
        .collection("organizations")
        .add({
          owner: rootState.session.user!.id,
          ...payload,
        })
        .then((doc) => {
          commit("update", {
            id: doc.id,
            ...payload,
          });
        });
    },
    load({ commit, rootState }) {
      return db
        .collection("organizations")
        .where("owner", "==", rootState.session.user!.id)
        .get()
        .then((querySnapshot) => {
          const orgs: OrganizationMap = {};

          querySnapshot.forEach((doc) => {
            const org = doc.data();
            orgs[org.name] = {
              id: doc.id,
              ...org,
            };
          });

          commit("set", orgs);
        });
    },
  },
  getters: {
    organizationByName: (state) => (name: string) => state[name],
  },
  mutations: {
    set(state, payload) {
      state = Object.assign(state, payload);
    },
    update(state, payload) {
      state[payload.name] = {
        ...state[payload.name],
        ...payload,
      };
    },
  },
};

export default organizationsModule;
