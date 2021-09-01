import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCOGlOBJQGyACY84bxUc6iCPy8qhYK-Gzc",
  authDomain: "snapchat-clone-5a3d3.firebaseapp.com",
  projectId: "snapchat-clone-5a3d3",
  storageBucket: "snapchat-clone-5a3d3.appspot.com",
  messagingSenderId: "628725879125",
  appId: "1:628725879125:web:fac44193276dc509061fdc",
  measurementId: "G-QKNQ342DF7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, storage, provider }