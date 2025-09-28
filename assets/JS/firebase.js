import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBABJUTpmf11FR96mfhpumXk5APDx22Xsk",
  authDomain: "zohue-auth.firebaseapp.com",
  projectId: "zohue-auth",
  storageBucket: "zohue-auth.firebasestorage.app",
  messagingSenderId: "438985606953",
  appId: "1:438985606953:web:b5cb8ca6e94d05097c1938",
  measurementId: "G-6QV1MNLQ0W",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
