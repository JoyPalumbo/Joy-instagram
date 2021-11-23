// import Firebase from 'firebase/app';
// // import { initializeApp } from "firebase/app";
// import 'firebase/firestore';
// import 'firebase/auth';

import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import seed file
// import { seedDatabase } from '../seed'


const config = {
  // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
  apiKey: "AIzaSyCRj9Xlneju2jsAYFxL9RtMSwWyRkiufCw",
  authDomain: "instagram-51c3a.firebaseapp.com",
  projectId: "instagram-51c3a",
  storageBucket: "instagram-51c3a.appspot.com",
  messagingSenderId: "714595690978",
  appId: "1:714595690978:web:63874275e3e2239a6e71bb"
};


// const firebase = Firebase.initializeApp(config);
// const { FieldValue } = Firebase.firestore;

// // call seed file (only once)
// // seedDatabase(firebase)
// export {firebase, FieldValue}
console.log("firebase", Firebase)

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase)

export { firebase, FieldValue };