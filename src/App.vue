<template>
  <router-view v-if="isLoaded" />
  <div v-else>Loading...</div>
</template>

<script lang="ts">
import Vue from "vue";

import { auth } from "data/firebase";

export default Vue.extend({
  name: "App",
  data() {
    return {
      isLoaded: false,
    };
  },
  created() {
    if (auth.currentUser) {
      this.$store.dispatch("loadApplicationData").then(() => {
        this.isLoaded = true;
      });
    } else {
      this.isLoaded = true;
    }
  },
});
</script>