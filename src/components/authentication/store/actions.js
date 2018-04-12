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
    Vue.prototype.$snotify.error(error.message, 'Error!', {
      timeout: 5000,
      showProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      position: 'rightTop',
    });
  }
}

export async function loginWithFacebook() {
  try {
    await signInWithFacebook();
  } catch (error) {
    throw new Error(error);
  }
}

export async function loginWithGoogle() {
  try {
    await signInWithGoogle();
  } catch (error) {
    throw new Error(error);
  }
}

export async function register(store, user) {
  // Todo: update user on store
  try {
    await signUp(user);
  } catch (error) {
    console.log(error); // eslint-disable-line
  }
}

export function autoSignIn({ commit }, user) {
  commit(signIn, user);
}

export function autoSignOut({ commit }) {
  commit(signOut);
}
