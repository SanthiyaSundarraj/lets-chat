import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB38iT1o9VYBg3Q_OiqVHQBarcn-8-7SUk",
  authDomain: "lets-chat-36bcf.firebaseapp.com",
  databaseURL: "https://lets-chat-36bcf.firebaseio.com",
  projectId: "lets-chat-36bcf",
  storageBucket: "lets-chat-36bcf.appspot.com",
  messagingSenderId: "1016697938687",
  appId: "1:1016697938687:web:ba230271bc8ae0412f22ca",
  measurementId: "G-GFXRLW0YFX"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
