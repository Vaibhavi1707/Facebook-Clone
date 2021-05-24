import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCc23YKA0Y41vAvvA5WV8Kwx1k6EEYhOe4",
    authDomain: "facebookclone-af46c.firebaseapp.com",
    projectId: "facebookclone-af46c",
    storageBucket: "facebookclone-af46c.appspot.com",
    messagingSenderId: "226731874795",
    appId: "1:226731874795:web:195aeb394e3e1e0a9da1ae",
    measurementId: "G-M4VHKM2SY8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;