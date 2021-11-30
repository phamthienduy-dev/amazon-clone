import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxwBzJt6MJw3OwKoN2fJS2coznROEcvcU",
  authDomain: "clone-2250a.firebaseapp.com",
  projectId: "clone-2250a",
  storageBucket: "clone-2250a.appspot.com",
  messagingSenderId: "1011603159364",
  appId: "1:1011603159364:web:57499ffcf0539cc019bf11",
  measurementId: "G-W2030CYEKR",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };
