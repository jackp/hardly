<template>
  <app-page-template>
    <h1>Org Edit</h1>
    <h2>Name: {{organization.name}}</h2>
  </app-page-template>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

import AppPageTemplate from "components/templates/AppPageTemplate.vue";
import { Organization } from "types/models/organization";

export default Vue.extend({
  name: "OrganizationEdit",
  components: {
    AppPageTemplate,
  },
  computed: {
    organization(): Organization {
      const { org } = this.$route.params;

      return this.$store.getters.organizationByName(org);
    },
  },
});
</script>

