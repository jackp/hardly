<template>
  <app-page-template>
    <h1>Org Create</h1>
    <form @submit.prevent="createOrg">
      <input type="text" placeholder="name" v-model="orgForm.name">
      <button type="submit">Create</button>
    </form>
  </app-page-template>
</template>

<script lang="ts">
import Vue from "vue";

import AppPageTemplate from "components/templates/AppPageTemplate.vue";

export default Vue.extend({
  name: "OrganizationCreate",
  data() {
    return {
      orgForm: {
        name: "",
      },
    };
  },
  components: {
    AppPageTemplate,
  },
  methods: {
    createOrg() {
      this.$store.dispatch("createOrganization", this.orgForm);
    },
  },
});
</script>

