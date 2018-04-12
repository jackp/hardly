<template>
  <div>
    <h1>Login Page</h1>
    <form>
      <input type="text" placeholder="Email" v-model="loginForm.email">
      <input type="password" placeholder="Password" v-model="loginForm.password">
      <button @click.prevent="login">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LoginPage",
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch("session/login", this.loginForm).then(() => {
        this.$router.push("/");
      });
    },
  },
});
</script>

