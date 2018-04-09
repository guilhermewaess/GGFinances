import { auth } from 'firebase';

export function signInWithFacebook() {
  return auth().signInWithPopup(new auth.FacebookAuthProvider());
}

export function signInWithGoogle() {
  return auth().signInWithPopup(new auth.GoogleAuthProvider());
}
