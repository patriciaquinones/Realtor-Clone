// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYHCwKlkv529VurFB48XMR1oYRkVdaqvc",
  authDomain: "realtor-clone-with-react.firebaseapp.com",
  projectId: "realtor-clone-with-react",
  storageBucket: "realtor-clone-with-react.appspot.com",
  messagingSenderId: "990752773584",
  appId: "1:990752773584:web:88224570ebfbdde4bad5d5"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();