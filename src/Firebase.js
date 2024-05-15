// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbxf2_JfhVzrSrx_aN5W0eTx13wNFfZG4",
  authDomain: "netflix-72046.firebaseapp.com",
  projectId: "netflix-72046",
  storageBucket: "netflix-72046.appspot.com",
  messagingSenderId: "607124864188",
  appId: "1:607124864188:web:17a2719551a238b34a64b9",
  measurementId: "G-5RSP45V2JK",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)
export{app, auth}