import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpeVqv8aEW7N9bHR9644DslId1gZgEzgY",
  authDomain: "linkedin-clone-react-f87a7.firebaseapp.com",
  projectId: "linkedin-clone-react-f87a7",
  storageBucket: "linkedin-clone-react-f87a7.appspot.com",
  messagingSenderId: "502663091881",
  appId: "1:502663091881:web:5dec9eed0a5772c7a3fbb8",
  measurementId: "G-YNGW8KBXCF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
