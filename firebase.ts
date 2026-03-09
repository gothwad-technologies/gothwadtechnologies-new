import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzjcFcJoEzJK1hvvLANKnLYNZ28Q_prtc",
  authDomain: "gothwadtechnologiesweb.firebaseapp.com",
  projectId: "gothwadtechnologiesweb",
  storageBucket: "gothwadtechnologiesweb.firebasestorage.app",
  messagingSenderId: "1044634123883",
  appId: "1:1044634123883:web:8a1123bf4915488d8c3b2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
