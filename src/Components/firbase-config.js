import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArmV5oUPhlLVMBWQWsaC84SWWIdSFQilE",
  authDomain: "mrk-shop.firebaseapp.com",
  projectId: "mrk-shop",
  storageBucket: "mrk-shop.appspot.com",
  messagingSenderId: "213771326668",
  appId: "1:213771326668:web:1814ee1e92dfcdaa251e69",
  measurementId: "G-0RYBTYVG0X",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
