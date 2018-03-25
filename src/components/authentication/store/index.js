import authState from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const authStore = {
  namespaced: true,
  state: authState,
  mutations,
  getters,
  actions,
};

export default authStore;
