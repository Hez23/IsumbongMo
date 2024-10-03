import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBy2E6kiwKov7KrfPODm34w-zZ05cwXXWY",
  authDomain: "isumbongmo-d92fd.firebaseapp.com",
  databaseURL: "https://isumbongmo-d92fd-default-rtdb.firebaseio.com",
  projectId: "isumbongmo-d92fd",
  storageBucket: "isumbongmo-d92fd.appspot.com",
  messagingSenderId: "112608294284",
  appId: "1:112608294284:web:79b11ede69c5087dc552a9",
  measurementId: "G-62PSZEYKTH",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const auth = getAuth();
const db = getFirestore(app);

export { database, auth, db };
