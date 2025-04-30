import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfI94WL5P5R_jBV9AGASAJgKONKholR8g",
  authDomain: "taylor-johns.firebaseapp.com",
  projectId: "taylor-johns",
  storageBucket: "taylor-johns.firebasestorage.app",
  messagingSenderId: "343354863955",
  appId: "1:343354863955:web:5ec08fe0f121d9d49971a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };
