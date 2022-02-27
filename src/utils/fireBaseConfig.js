// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6wN80zhL3DRlFZRgSH_6RPgkROWP0vFY",
  authDomain: "upscale-shoes.firebaseapp.com",
  projectId: "upscale-shoes",
  storageBucket: "upscale-shoes.appspot.com",
  messagingSenderId: "598543968208",
  appId: "1:598543968208:web:66e3ff3a96301111603bd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db