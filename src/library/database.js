import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'

// nieuwe firebase app aanmaken
const config = {
  apiKey: 'AIzaSyDzbaGVQi-otyHx0NtJ93uYb8vpzc5hxqo',
  authDomain: 'webchat-5d3fc.firebaseapp.com',
  projectId: 'webchat-5d3fc',
  storageBucket: 'webchat-5d3fc.appspot.com',
  messagingSenderId: '964171486096',
  appId: '1:964171486096:web:0b0a31f84c1310e8921915',
  measurementId: 'G-97TB3QWTF8'
}

// init
// https://firebase.google.com/docs/auth/web/email-link-auth?authuser=0

let App = Firebase.initializeApp(config)

export let FirebaseApp = App
export let FirebaseDb = App.database()
export let FirebaseAuth = App.auth()

export default {}
