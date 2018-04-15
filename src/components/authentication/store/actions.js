import Vue from 'vue';

import {
  signInWithCredentials,
  signInWithFacebook,
  signInWithGoogle,
  signUp,
} from '@/components/authentication/authentication.service';
import {
  setIsAuthenticated,
  signIn,
  signOut,
} from '@/components/authentication/store/mutationTypes';

export function setAuthentication({ commit }, isAuthenticated) {
  commit(setIsAuthenticated, isAuthenticated);
}

export async function loginWithUserAndPassword(store, { email, password }) {
  try {
    await signInWithCredentials(email, password);
  } catch (error) {
    Vue.prototype.$snotify.error(error.message, 'Error!');
  }
}

export async function loginWithFacebook() {
  try {
    await signInWithFacebook();
  } catch (error) {
    Vue.prototype.$snotify.error(error.message, 'Error!');
  }
}

export async function loginWithGoogle() {
  try {
    await signInWithGoogle();
  } catch (error) {
    Vue.prototype.$snotify.error(error.message, 'Error!');
  }
}

export async function register({ dispatch }, newUser) {
  try {
    const user = await signUp(newUser);
    dispatch('autoSignIn', user);
  } catch (error) {
    Vue.prototype.$snotify.error(error.message, 'Error!');
  }
}

export function autoSignIn({ commit }, user) {
  commit(signIn, user);
}

export function autoSignOut({ commit }) {
  commit(signOut);
}
