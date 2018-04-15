import Vue from 'vue';
import { auth } from 'firebase';

function tryCreateUser({ email, password }) {
  return auth().createUserWithEmailAndPassword(email, password);
}

function tryUpdateUser({ name, surname }, user) {
  return user.updateProfile({ displayName: `${name} ${surname}` });
}

export function signInWithCredentials(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function signInWithFacebook() {
  return auth().signInWithPopup(new auth.FacebookAuthProvider());
}

export function signInWithGoogle() {
  return auth().signInWithPopup(new auth.GoogleAuthProvider());
}

export async function signUp(newUser) {
  let user = null;
  try {
    user = await tryCreateUser(newUser);
    await tryUpdateUser(newUser, user);
  } catch (error) {
    if (user) {
      await user.delete();
    }
    Vue.prototype.$snotify.error(error.message, 'Error!');
  }
  return user;
}
