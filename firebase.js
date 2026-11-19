import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getDatabase, ref, set, push, onValue, remove, update, get } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD6r1mm0Fm0gIioG2UcWQz0XtJHQj15iI",
  authDomain: "restopro2026-60038.firebaseapp.com",
  databaseURL: "https://restopro2026-60038-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "restopro2026-60038",
  storageBucket: "restopro2026-60038.firebasestorage.app",
  messagingSenderId: "336434967293",
  appId: "1:336434967293:web:ba55b927cd01aa0229c494"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, set, push, onValue, remove, update, get };

export const userLogin = JSON.parse(localStorage.getItem("userLogin"))||{nama:"Admin"};

// Biar menu kamu yang lama tetep jalan beb
export const menuRef = ref(db, 'menu');