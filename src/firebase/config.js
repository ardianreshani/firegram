import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAjd5ZGA2wBjjIcvzBS1XEpW0JX1c5Hv9s",
  authDomain: "firegram-3720d.firebaseapp.com",
  projectId: "firegram-3720d",
  storageBucket: "firegram-3720d.appspot.com",
  messagingSenderId: "907097547056",
  appId: "1:907097547056:web:be42aacddc0720d7ab28f5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };