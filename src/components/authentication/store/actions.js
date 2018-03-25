import { setIsAuthenticated } from './mutationTypes';

export default {
  setIsAuthenticated({ commit }, isAuthenticated) {
    commit(setIsAuthenticated, isAuthenticated);
  },
};
