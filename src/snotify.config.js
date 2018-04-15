import Vue from 'vue';
import Snotify from 'vue-snotify';

Vue.use(Snotify, {
  toast: {
    timeout: 4000,
    showProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    position: 'rightTop',
  },
});
