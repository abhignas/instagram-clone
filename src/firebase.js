import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAGs3nt3kQGtg8CrWjpE9wGsbVVuR_vbbQ",
    authDomain: "instagram-ef292.firebaseapp.com",
    databaseURL: "https://instagram-ef292.firebaseio.com",
    projectId: "instagram-ef292",
    storageBucket: "instagram-ef292.appspot.com",
    messagingSenderId: "452083950019",
    appId: "1:452083950019:web:6ee853a3c489d7dc6d9d76",
    measurementId: "G-L49TT1SYF6"
  };
const firebaseApp =firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth =firebase.auth();
const storage = firebase.storage();

export { db, auth, storage};