<template>
  <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
    <div class="container">
      <div class="row w-100">
      <div class="col-6">
        <router-link to="/" class="navbar-brand">Vue Firebase Auth</router-link>
      </div>

      <div class="col-6" id="navbarSupportedContent">
        <ul class="navbar-nav flex-row justify-content-end align-items-center">
          <template v-if="user.loggedIn">
            <div class="nav-item">{{user.data.displayName}}</div>
            <li class="nav-item">
              <a class="nav-link" @click.prevent="signOut">Sign out</a>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <router-link to="login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="register" class="nav-link">Register</router-link>
            </li>
          </template>
        </ul>
      </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
li{
  display: inline-block;
  margin: 0 4px
}
</style>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
};
</script>