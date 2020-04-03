import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyA6I6BWHE1h6Nkt3FYPHFbcwj7veZqVTtM",
  authDomain: "agilehutdev.firebaseapp.com",
  databaseURL: "https://agilehutdev.firebaseio.com",
  projectId: "agilehutdev",
  storageBucket: "agilehutdev.appspot.com",
  messagingSenderId: "829177803606",
  appId: "1:829177803606:web:881be4fcabe44bd670dcf7",
  measurementId: "G-0NPBENKYEZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
//firebase.analytics();

export default firebase;
