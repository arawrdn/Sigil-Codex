import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-xxxxx",
  authDomain: "sigil-codex.firebaseapp.com",
  projectId: "sigil-codex",
  storageBucket: "sigil-codex.appspot.com",
  messagingSenderId: "xxxxxx",
  appId: "1:xxxxxx:web:xxxxxx"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export async function googleSignIn() {
  const result = await signInWithPopup(auth, provider);
  return result.user;
}
