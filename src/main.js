import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { AuthConfigOptions } from "../auth_config.js";
import { Auth0Plugin } from "./auth";
import * as firebase from "firebase";


Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false

const configOptions = AuthConfigOptions;
firebase.initializeApp(configOptions);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
