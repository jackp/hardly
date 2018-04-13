<template>
  <div id="app">
    <app-sidebar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import AppSidebar from "components/organisms/AppSidebar.vue";

export default Vue.extend({
  name: "AppPageTemplate",
  components: {
    AppSidebar,
  },
});
</script>

