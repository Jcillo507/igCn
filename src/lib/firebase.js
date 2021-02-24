// import { seedDatabase } from './seed'

const config = {
  apiKey: "AIzaSyBkj7y4vhbf6nqedoz6xVLH2EXgZCVbDI4",
  authDomain: "instagramclone-d98fc.firebaseapp.com",
  databaseURL: "https://instagramclone-d98fc.firebaseio.com",
  projectId: "instagramclone-d98fc",
  storageBucket: "instagramclone-d98fc.appspot.com",
  messagingSenderId: "320519598039",
  appId: "1:320519598039:web:413dbcbc60bbd1aab1e592",
  measurementId: "G-MEJ3LQYS83"
}

const firebaseApp = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

// seedDatabase(firebaseApp)

export { firebaseApp, FieldValue }