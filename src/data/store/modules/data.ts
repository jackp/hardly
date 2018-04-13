import Vue from "vue";
import { Action, Module } from "vuex";

import { db } from "data/firebase";
import { RootState } from "data/store";
import { Organization, OrganizationMap } from "types/models/organization";
import { User } from "types/models/user";

export interface State {
  organizations: OrganizationMap;
}

const dataModule: Module<State, RootState> = {
  namespaced: true,
  state: {
    organizations: {},
  },
  actions: {
    createOrganization({ commit, rootState }, payload) {
      return db
        .collection("organizations")
        .add({
          owner: rootState.session.user!.id,
          ...payload,
        })
        .then((doc) => {
          commit("addOrganization", {
            id: doc.id,
            ...payload,
          });
        });
    },
    loadOrganizations({ commit, rootState }) {
      return db
        .collection("organizations")
        .where("owner", "==", rootState.session.user!.id)
        .get()
        .then((querySnapshot) => {
          const organizations: OrganizationMap = {};

          querySnapshot.forEach((doc) => {
            const org = doc.data();
            organizations[org.name] = {
              id: doc.id,
              ...org,
            };
          });

          commit("setOrganizations", organizations);
        });
    },
  },
  getters: {
    organizationByName: (state) => (name: string) => state.organizations[name],
  },
  mutations: {
    setOrganizations(state, payload) {
      state.organizations = payload;
    },
    addOrganization(state, payload) {
      state.organizations = {
        ...state.organizations,
        [payload.name]: payload,
      };
    },
  },
};

export default dataModule;
