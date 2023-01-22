import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAqIoAPHna8A5YVwcnCavbcHwZr7TGgoxg",
  authDomain: "admin-94c91.firebaseapp.com",
  projectId: "admin-94c91",
  storageBucket: "admin-94c91.appspot.com",
  messagingSenderId: "830120015520",
  appId: "1:830120015520:web:77914db733f20ed6017bc5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
