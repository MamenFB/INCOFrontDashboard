
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "incodasboard.firebaseapp.com",
  projectId: "incodasboard",
  storageBucket: "incodasboard.appspot.com",
  messagingSenderId: "458477845117",
  appId: "1:458477845117:web:3c2275cb27cd3b0c428f14",
  measurementId: "G-ZG346HLRE7"
};


const app = initializeApp(firebaseConfig);
export { app };
