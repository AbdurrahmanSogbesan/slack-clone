import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZQZJBofD4_JARKC7HXEB3GGBk9tl52N8",
  authDomain: "slack-clone-bf49e.firebaseapp.com",
  projectId: "slack-clone-bf49e",
  storageBucket: "slack-clone-bf49e.appspot.com",
  messagingSenderId: "159776558070",
  appId: "1:159776558070:web:1eee73b1e7cb53979255d7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
