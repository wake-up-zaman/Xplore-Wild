// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbRopEXJ7Jj6KKqPwGlGBWhj2GsvFDMnk",
  authDomain: "zaman-wild-life.firebaseapp.com",
  projectId: "zaman-wild-life",
  storageBucket: "zaman-wild-life.appspot.com",
  messagingSenderId: "596843969798",
  appId: "1:596843969798:web:73feff6c9c1bff5044b287"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;