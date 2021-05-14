import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBbIYMKhU0kvTCxIndoKavyKSa56ZS2_YY",
  authDomain: "esther-movie-awards.firebaseapp.com",
  projectId: "esther-movie-awards",
  storageBucket: "esther-movie-awards.appspot.com",
  messagingSenderId: "150104659631",
  appId: "1:150104659631:web:c5410138633c9dccd1a65a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
