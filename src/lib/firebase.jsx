// import { seedDatabase } from './seed'

const config = {
  apiKey: "AIzaSyCUie--RaJAd5_wx6kAP2tF8OuNSsNeZMI",
  authDomain: "instaclone-34129.firebaseapp.com",
  projectId: "instaclone-34129",
  // databaseURL: "https://instaclone-34129.firebaseio.com",
  storageBucket: "instaclone-34129.appspot.com",
  messagingSenderId: "1204295200",
  appId: "1:1204295200:web:5c770d6f1ef7755f2c8e45",
  measurementId: "G-YZX95ST1WR"
}

const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

// seedDatabase(firebaseApp)

export { firebase, FieldValue }