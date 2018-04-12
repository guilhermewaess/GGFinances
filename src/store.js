import Vue from 'vue';
import Vuex from 'vuex';
import authStore from '@/components/authentication/store';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth: authStore,
  },
});

export default store;
