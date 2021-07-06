import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2btUar9Ml0z6Obc3SIjmSHR8l2-3P53c",
  authDomain: "disneyplus-clone-1723.firebaseapp.com",
  projectId: "disneyplus-clone-1723",
  storageBucket: "disneyplus-clone-1723.appspot.com",
  messagingSenderId: "377662093201",
  appId: "1:377662093201:web:64c3b191075f07a132cc30",
  measurementId: "G-ZMJ25R8TRJ"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  export {auth,provider,storage};
  export default db;