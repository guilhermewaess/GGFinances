// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import {
  Vuetify,
  VApp,
  VBtn,
  VCard,
  VDivider,
  VFooter,
  VForm,
  VList,
  VGrid,
  VIcon,
  VNavigationDrawer,
  VTextField,
  VToolbar,
  transitions,
} from 'vuetify';

import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from './App';
import router from './router';
import '../node_modules/vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VCard,
    VDivider,
    VFooter,
    VForm,
    VList,
    VGrid,
    VIcon,
    VNavigationDrawer,
    VTextField,
    VToolbar,
    transitions,
  },
  theme: {
    primary: '#1A237E',
    secondary: '#304FFE',
    accent: '#5C6BC0',
    error: '#B71C1C',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50',
  },
});

Vue.use(VeeValidate);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
