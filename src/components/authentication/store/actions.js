import {
  signInWithFacebook,
  signInWithGoogle,
} from '@/components/authentication/authentication.service';
import {
  setIsAuthenticated,
  signIn,
  signOut,
} from '@/components/authentication/store/mutationTypes';

export function setAuthentication({ commit }, isAuthenticated) {
  commit(setIsAuthenticated, isAuthenticated);
}

export async function loginWithFacebook() {
  try {
    return await signInWithFacebook();
  } catch (error) {
    throw new Error(error);
  }
}

export async function loginWithGoogle() {
  try {
    return await signInWithGoogle();
  } catch (error) {
    throw new Error(error);
  }
}

export function autoSignIn({ commit }, user) {
  commit(signIn, user);
}

export function autoSignOut({ commit }) {
  commit(signOut);
}
