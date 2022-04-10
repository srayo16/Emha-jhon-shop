// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8TxvYR6OXsuiQMqROflQMiAJTR61aNZ8",
  authDomain: "ema-jhon-simple-45504.firebaseapp.com",
  projectId: "ema-jhon-simple-45504",
  storageBucket: "ema-jhon-simple-45504.appspot.com",
  messagingSenderId: "589919840095",
  appId: "1:589919840095:web:036f9eb9e8caf05ab338ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;