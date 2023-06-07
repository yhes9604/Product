// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAmS26Ym4HAiwWdzwj1XvagSTKWrOkF2E",
  authDomain: "fir-2c737.firebaseapp.com",
  projectId: "fir-2c737",
  storageBucket: "fir-2c737.appspot.com",
  messagingSenderId: "114910138437",
  appId: "1:114910138437:web:26eb08545467f9765a932c",
  measurementId: "G-WJHKSFH3D2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app);

export {
    auth ,app,firestore
}