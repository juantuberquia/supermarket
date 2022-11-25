import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPJcMjpqKN6JjgoI1wj_QVMc2nggdaVLI",
  authDomain: "supermarket-a3c69.firebaseapp.com",
  projectId: "supermarket-a3c69",
  storageBucket: "supermarket-a3c69.appspot.com",
  messagingSenderId: "131949426405",
  appId: "1:131949426405:web:8f1fe230e3673f468f460c",
};

const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);
