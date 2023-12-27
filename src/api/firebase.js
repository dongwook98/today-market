import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
const database = getDatabase(app);

export function login() {
  return signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  return signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    // 1. 사용자가 있는 경우에 (로그인한경우)
    // 2. 사용자가 어드민 권한을 가지고 있는지 확인!
    // 3. {...user, isAdmin: true/false}
    const updatedUser = user ? await checkAdminUser(user) : user;
    callback(updatedUser);
  });
}

async function checkAdminUser(user) {
  return get(ref(database, 'admins'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const isAdmin = snapshot.val().includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    })
    .catch((error) => {
      console.error(error);
    });
}
