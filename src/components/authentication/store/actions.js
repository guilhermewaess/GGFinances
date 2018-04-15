import Vue from 'vue';
import router from '@/router';

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

function goToFinances() {
  router.push({ name: 'Finances' });
}

export function setAuthentication({ commit }, isAuthenticated) {
  commit(setIsAuthenticated, isAuthenticated);
}

export async function loginWithUserAndPassword(store, { email, password }) {
  try {
    await signInWithCredentials(email, password);
    goToFinances();
  } catch (error) {
    Vue.prototype.$snotify.error(error.message, 'Error!');
  }
}

export async function loginWithFacebook() {
  try {
    await signInWithFacebook();
    goToFinances();
  } catch (error) {
    Vue.prototype.$snotify.error(error.message, 'Error!');
  }
}

export async function loginWithGoogle() {
  try {
    await signInWithGoogle();
    goToFinances();
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
  goToFinances();
}

export function autoSignOut({ commit }) {
  commit(signOut);
}
