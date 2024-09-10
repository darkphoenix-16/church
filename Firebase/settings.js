import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
import 'firebase/compat/storage';
import firebase from "firebase/compat/app";


const firebaseConfig = {
  apiKey: "AIzaSyCetY9ftrugyeLJGMrxF0Nu4V2PmLYM59Y",
  authDomain: "church-29d4c.firebaseapp.com",
  projectId: "church-29d4c",
  storageBucket: "church-29d4c.appspot.com",
  messagingSenderId: "958242016983",
  appId: "1:958242016983:web:75a2eb034d8fcd7e8f6a92"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
export const imgStorage = firebase.storage;

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 export const storage = getStorage(app);
 export const db = initializeFirestore(app, {
   experimentalForceLongPolling: true,
  });
  export {auth}
