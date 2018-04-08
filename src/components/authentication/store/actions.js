import { signInWithFacebook } from '@/components/authentication/authentication.service';
import {
  setIsAuthenticated,
  signIn,
  signOut,
} from '@/components/authentication/store/mutationTypes';

function createSignInObject(firebaseResult) {
  return {
    user: firebaseResult.user,
    token: firebaseResult.credential.accessToken,
  };
}

export function setAuthentication({ commit }, isAuthenticated) {
  commit(setIsAuthenticated, isAuthenticated);
}

export async function loginWithFacebook({ commit }) {
  try {
    const result = await signInWithFacebook();
    const signInObject = createSignInObject(result);

    commit(signIn, signInObject);
  } catch (error) {
    throw new Error(error);
  }
}

export function autoSignIn({ commit }, firebaseResult) {
  commit(signIn, createSignInObject(firebaseResult));
}

export function autoSignOut({ commit }) {
  commit(signOut);
}
// export { loginWithGoogle, loginWithFacebook, setAuthentication, autoSignIn, autoSignOut };
