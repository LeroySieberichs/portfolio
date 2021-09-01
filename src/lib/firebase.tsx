import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyDB1yvU9Wb07tNSyf5zPKI9__t23Unw1C0",
    authDomain: "portfolio-resume-1b3c2.firebaseapp.com",
    projectId: "portfolio-resume-1b3c2",
    storageBucket: "portfolio-resume-1b3c2.appspot.com",
    messagingSenderId: "29924503904",
    appId: "1:29924503904:web:bdc2fbc8625ce1269cae05",
    measurementId: "G-FPT5KRSEN0"
  };

// const env = process.env.NODE_ENV;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialise Firebase
// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Firestore exports
export const firestore = firebase.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const increment = firebase.firestore.FieldValue.increment;
export const fieldValue = firebase.firestore.FieldValue;

// Functions exports
export const functions = firebase.app().functions();

// Emulators if working locally