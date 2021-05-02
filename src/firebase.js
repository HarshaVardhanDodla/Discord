import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB6P0C-74o0A6GV-WMi1StOvs82lQto4eI",
    authDomain: "discord-8a32a.firebaseapp.com",
    projectId: "discord-8a32a",
    storageBucket: "discord-8a32a.appspot.com",
    messagingSenderId: "720093877117",
    appId: "1:720093877117:web:a931abe7816d55a9a57214",
    measurementId: "G-H1GWQGH3K9"
  };

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;