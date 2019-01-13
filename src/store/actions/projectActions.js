import {
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAIL,
  DELETE_TODO_FAIL,
  DELETE_TODO_SUCCESS,
  TASK_COMPLETED_FAIL,
  TASK_COMPLETED_SUCCESS
} from "./typeActions";

import * as R from "ramda";

import firebase from "../fb_config";

export const createdTodo = todo => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const fireStore = getFirestore();
    const state = getState();
    const displayName = state.firebase.profile.displayName;
    const authorId = state.firebase.auth.uid;

    // const firebase = getFirebase();
    // const storageRef = firebase
    //   .storage()
    //   .ref()
    //   .child(`imgUserFoto/${authorId}`);
    // console.log("storageRef", storageRef);
    // console.log("firebase", firebase);

    fireStore
      .collection("todos")
      .add({
        title: `${
          todo.title.length > 40 ? `${R.take(40)(todo.title)}...` : todo.title
        }`,
        description: todo.title,
        datePicker: todo.datePicker,
        timeCreatedTodo: Date.now(),
        dateTodoCompleted: todo.datePicker,
        displayName,
        authorId,
        completed: false
      })
      .then(() => {
        dispatch({ type: CREATE_TODO_SUCCESS });
      })
      .catch(error => {
        dispatch({ type: CREATE_TODO_FAIL, payload: error });
      });
  };
};

export const deleteTodoAcation = id => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const fireStore = getFirestore();
    fireStore
      .collection("todos")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: DELETE_TODO_SUCCESS, payload: id });
      })
      .catch(error => {
        dispatch({ type: DELETE_TODO_FAIL, payload: error });
      });
  };
};
export const deleteTodoAcationRef = id => {
  return dispatch => {
    const db = firebase.firestore();
    const docRef = db.collection("todos").doc(id);
    docRef
      .delete()
      .then(function() {
        console.log("Document successfully deleted!");
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  };
};

export const taskСompletedAction = id => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const fireStore = getFirestore();
    fireStore
      .collection("todos")
      .doc(id)
      .update({
        completed: true
      })
      .then(function() {
        dispatch({ type: TASK_COMPLETED_SUCCESS });
        console.log("Document successfully updated!");
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        dispatch({ type: TASK_COMPLETED_FAIL, payload: error });
        console.error("Error updating document: ", error);
      });
  };
};
