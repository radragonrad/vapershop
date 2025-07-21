// resources/js/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCdWvRAWEiAie7qOtiIaaKKZLcGbunPIkY",
  authDomain: "savapers-b4692.firebaseapp.com",
  projectId: "savapers-b4692",
  storageBucket: "savapers-b4692.firebasestorage.app",
  messagingSenderId: "338834288276",
  appId: "1:338834288276:web:7b32ef953b9ef7e4170e81",
  measurementId: "G-CK2BNJC1DP"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { db, auth, analytics, collection, getDocs, signInWithEmailAndPassword, signOut, onAuthStateChanged, addDoc };