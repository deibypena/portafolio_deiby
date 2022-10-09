import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABvOGmwFG7ghGDkYJ49x8cKdgfj40sEpM",
  authDomain: "portafoliodeiby.firebaseapp.com",
  projectId: "portafoliodeiby",
  storageBucket: "portafoliodeiby.appspot.com",
  messagingSenderId: "201957924087",
  appId: "1:201957924087:web:1b958b2f41bbb6c89147f2"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);