import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({

    apiKey: "AIzaSyBKsWeQ2qNwRLbWW_joMOC3k3rjzwSskGY",
    authDomain: "wa-auth-4d53b.firebaseapp.com",
    projectId: "wa-auth-4d53b",
    storageBucket: "wa-auth-4d53b.appspot.com",
    messagingSenderId: "524129430074",
    appId: "1:524129430074:web:63eb197e9e7fbdea166303"

    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_API_ID
})

export const auth = app.auth()
export default app