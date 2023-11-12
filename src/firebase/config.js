import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4lrGTJn5a-WQsXwu27YnJ3g2fsxcIZcM",
  authDomain: "oruma-b7312.firebaseapp.com",
  projectId: "oruma-b7312",
  storageBucket: "oruma-b7312.appspot.com",
  messagingSenderId: "13606277164",
  appId: "1:13606277164:web:5946b60dea74b6a32d8189",
};

firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();

export { projectFirestore };
