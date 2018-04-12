import authState from '@/components/authentication/store/state';
import getters from '@/components/authentication/store/getters';
import * as actions from '@/components/authentication/store/actions';
import mutations from '@/components/authentication/store/mutations';

const authStore = {
  namespaced: true,
  state: authState,
  mutations,
  getters,
  actions,
};

export default authStore;
