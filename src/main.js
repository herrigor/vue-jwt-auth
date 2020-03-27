import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import { AuthConfigOptions } from "../auth_config.js";
import * as firebase from "firebase";
import store from "./store";

Vue.config.productionTip = false

const configOptions = AuthConfigOptions;
firebase.initializeApp(configOptions);
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});
firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
          unsubscribe();
          resolve(user);
      }, reject);
  })
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
