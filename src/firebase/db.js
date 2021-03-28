import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBb4g5QDLYUgxl3W7hzE7EPt2874G5nxSs",
    authDomain: "vue-fire-todo-5b715.firebaseapp.com",
    projectId: "vue-fire-todo-5b715",
    storageBucket: "vue-fire-todo-5b715.appspot.com",
    messagingSenderId: "905220769818",
    appId: "1:905220769818:web:715f834ed3a783c54d69a3"
  };
  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig).firestore();