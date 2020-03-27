<template>
  <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
    <div class="container">
      <div class="row w-100">
      <div class="col-6">
        <p class="navbar-brand" v-if="route=='/'">Vue Firebase Auth</p>
        <router-link to="/" class="navbar-brand" v-if="route!=='/'">Vue Firebase Auth</router-link>
      </div>

      <div class="col-6" id="navbarSupportedContent">
        <ul class="navbar-nav flex-row justify-content-end align-items-center">
          <template v-if="user.loggedIn">
            <div class="nav-item"><i class="font-icon icon-user-circle-o"></i>{{user.data.displayName}}</div>
            <li class="nav-item">
              <a class="nav-link" @click.prevent="signOut">Sign out</a>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <router-link to="login" class="nav-link">Login<i class="font-icon icon-login"></i></router-link>
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
.navbar-brand {
  display: inline-block;
  padding-top: .3125rem;
  padding-bottom: .3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
}
li{
  display: inline-block;
}
.navbar-nav .nav-link{
  margin: 0 3px;
  padding-left: 6px;
  padding-right: 6px;
}
.navbar-nav .nav-link:hover{
  background: #ccefdb;
  color: #37495f;
}
</style>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  name: "Navbar",
  data(){
    return {
      route: null
    }
  },
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  watch:{
    '$route.path': function(){
      console.log(this.$route);
      this.route = this.$route.path;
    } 
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "home" });
        });
    }
  }
};
</script>