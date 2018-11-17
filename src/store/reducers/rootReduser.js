import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducers from "./authReducers";
import todoReducer from "./todoReducer";

export default combineReducers({
  routing: routerReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  todos: todoReducer,
  auth: authReducers
});
