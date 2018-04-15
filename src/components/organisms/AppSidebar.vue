<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/create">Create Org</router-link>
      </li>
      <li>Organizations:</li>
      <ul>
        <li v-for="org in organizations" :key="org.id">
          <router-link :to="`/${org.name}`">{{org.name}}</router-link>
        </li>
      </ul>
      <li>
        <router-link to="/logout">Logout</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

import { RootState } from "data/store";
import { OrganizationMap } from "types/models/organization";

export default Vue.extend({
  name: "AppSidebar",
  computed: {
    ...mapState({
      organizations: (state: RootState) => state.organizations,
    }),
  },
});
</script>
