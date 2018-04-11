import { auth } from 'firebase';

async function tryCreateUser({ email, password }) {
  const user = await auth().createUserWithEmailAndPassword(email, password);
  return user;
}

async function tryUpdateUser(a, user) {
  await user.updateProfile();
}

export function signInWithFacebook() {
  return auth().signInWithPopup(new auth.FacebookAuthProvider());
}

export function signInWithGoogle() {
  return auth().signInWithPopup(new auth.GoogleAuthProvider());
}

export async function signUp(newUser) {
  let user;
  try {
    user = await tryCreateUser(newUser);
    await tryUpdateUser(newUser, user);

    return user;
  } catch (error) {
    if (user) {
      await user.delete();
    }
    throw error;
  }
}
