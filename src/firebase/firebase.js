import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCaVB1QSAbo4lStUUrkTl60a0JroIJsALI",
  authDomain: "note-app-olakunle-exxdee.firebaseapp.com",
  databaseURL: "https://note-app-olakunle-exxdee-default-rtdb.firebaseio.com",
  projectId: "note-app-olakunle-exxdee",
  storageBucket: "note-app-olakunle-exxdee.appspot.com",
  messagingSenderId: "364279708879",
  appId: "1:364279708879:web:8bd09cb8b5b774ddc9cbba",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
