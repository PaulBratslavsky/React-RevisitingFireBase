// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBj3vuRH6hAp760aPiS96kKBMw507Hdqns",
  authDomain: "backontrack-82f39.firebaseapp.com",
  projectId: "backontrack-82f39",
  storageBucket: "backontrack-82f39.appspot.com",
  messagingSenderId: "199037984530",
  appId: "1:199037984530:web:3df85528938673a842ddcb",
  measurementId: "G-BTT6EDH8N6",
}; 

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics()

export const db = firebase.firestore()
export const firebaseTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export default firebase;
