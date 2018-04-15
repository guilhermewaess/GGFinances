// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import { auth, initializeApp } from 'firebase';

import App from './App';
import router from './router';
import store from './store';
import firebaseConfig from './firebase.config';
import './vuetify.config';
import './snotify.config';

Vue.use(VeeValidate);
Vue.config.productionTip = false;

let app;
initializeApp(firebaseConfig);
auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('auth/autoSignIn', user);
  } else {
    store.dispatch('auth/autoSignOut');
  }

  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      components: { App },
      template: '<App/>',
    });
  }
});
