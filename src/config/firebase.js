import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAeg-IRpm0Ilh1h7kgntwjXAnBLPn2hy9Y",
  authDomain: "portfolio-9927.firebaseapp.com",
  projectId: "portfolio-9927",
  // storageBucket: "portfolio-9927.firebasestorage.app",
  storageBucket: "portfolio-9927.appspot.com",
  messagingSenderId: "44331080974",
  appId: "1:44331080974:web:09a1dd2047065c05420b5f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
