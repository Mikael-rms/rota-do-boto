import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjioYqpCw72YLHztLWIJ6NkAody4Zk3IU",
  authDomain: "rota-do-boto-auth.firebaseapp.com",
  projectId: "rota-do-boto-auth",
  storageBucket: "rota-do-boto-auth.firebasestorage.app",
  messagingSenderId: "953553173750",
  appId: "1:953553173750:web:69571455fb6235e7a9c0d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);