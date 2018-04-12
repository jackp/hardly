<template>
  <div>
    <h1>Landing Page</h1>
    <div v-if="user">
      <p>UserId: {{user.id}}</p>
      <router-link to="/logout">Logout</router-link>
    </div>
    <router-link v-else to="/login">Login</router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

import { RootState } from "data/store";

export default Vue.extend({
  name: "LandingPage",
  computed: {
    ...mapState({
      user: (state: RootState) => state.session.user,
    }),
  },
});
</script>

