<template>
  <app-page-template>
    <h1>Dashboard Page</h1>
  </app-page-template>
</template>

<script lang="ts">
import Vue from "vue";

import AppPageTemplate from "components/templates/AppPageTemplate.vue";

export default Vue.extend({
  name: "DashboardPage",
  components: {
    AppPageTemplate,
  },
});
</script>

