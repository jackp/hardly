<template>
  <component :is="indexComponent" />
</template>

<script lang="ts">
import Vue, { Component } from "vue";

import LandingPage from "./LandingPage.vue";
import DashboardPage from "./DashboardPage.vue";

export default Vue.extend({
  name: "IndexPage",
  computed: {
    indexComponent(): Component {
      return this.$store.state.session.user ? DashboardPage : LandingPage;
    },
  },
});
</script>
