import {
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAIL,
  DELETE_TODO_FAIL,
  DELETE_TODO_SUCCESS
} from "./typeActions";

export const createdTodo = todo => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const fireStore = getFirestore();
    const state = getState();
    const author = state.firebase.profile.nickname;
    const authorId = state.firebase.auth.uid;

    fireStore
      .collection("todos")
      .add({
        ...todo,
        title: todo.titleTodo,
        description: todo.titleTodo,
        timeCreatedTodo: Date.now(),
        dateTodoCompleted: todo.datePicker,
        author,
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
