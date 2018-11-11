import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
// import "firebase/storage";
// import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCV6HVbskI_MnJ6VeCbOzGwGEGkR2f_FZw",
  authDomain: "todo-6c9b8.firebaseapp.com",
  databaseURL: "https://todo-6c9b8.firebaseio.com",
  projectId: "todo-6c9b8",
  storageBucket: "todo-6c9b8.appspot.com",
  messagingSenderId: "78584915556"
};

const fire = firebase.initializeApp(config);


export default fire;

export const fbRef = fire.database().ref();
export const fbRefTodo = fire
  .database()
  .ref()
  .child("todos");
