import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/database"
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDevwFRt6Tdm4F20Y_3vvNIrCXF_P1Orlg",
  authDomain: "discord-clone-6b542.firebaseapp.com",
  projectId: "discord-clone-6b542",
  storageBucket: "discord-clone-6b542.appspot.com",
  messagingSenderId: "1053155234288",
  appId: "1:1053155234288:web:8e58ac9680868f0a114d35"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage(app);


export { auth, provider, storage};
export default db;