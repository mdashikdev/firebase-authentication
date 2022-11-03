import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIQCpHZK211S_Xg_giacdxBFeVagw9fWk",
  authDomain: "auth-app-fe622.firebaseapp.com",
  projectId: "auth-app-fe622",
  storageBucket: "auth-app-fe622.appspot.com",
  messagingSenderId: "439139107694",
  appId: "1:439139107694:web:b5f03a7eb448c20aa1777f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);