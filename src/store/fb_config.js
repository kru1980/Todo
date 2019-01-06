// const firebase = require("firebase/app");
// require("firebase/database");
// require("firebase/auth");
// require("firebase/firestore");
import * as firebase from "firebase/app";
// import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyCV6HVbskI_MnJ6VeCbOzGwGEGkR2f_FZw",
  authDomain: "todo-6c9b8.firebaseapp.com",
  databaseURL: "https://todo-6c9b8.firebaseio.com",
  projectId: "todo-6c9b8",
  storageBucket: "todo-6c9b8.appspot.com",
  messagingSenderId: "78584915556"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
