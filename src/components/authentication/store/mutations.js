import { setIsAuthenticated } from './mutationTypes';

export default {
  [setIsAuthenticated](state, payload) {
    state.isAuthenticated = payload;
  },
};
