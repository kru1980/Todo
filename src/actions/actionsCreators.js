import {
  ADD_TODO_SUCCESS,
  ADD_TODO_START,
  FETCH_TODO_START,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILUR,
  DELETE_TODO
} from "../constance/actionTypes";

import fire from "../firebase";

export const addTodoStart = () => {
  return {
    type: ADD_TODO_START
  };
};

export const actionAddTodoSuccess = (addTodo, id, date) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: { ...addTodo, id, date }
  };
};

export const addTodo = addTodo => {
  return async dispatch => {
    const date = Date.now().toString();
    const todoRef = fire.database().ref("/todos");
    const newTodo = todoRef.push();
    const id = newTodo.key;
    dispatch(addTodoStart());

    await newTodo.set({
      titleTodo: addTodo.titleTodo,
      description: addTodo.description,
      id,
      date
    });
    dispatch(actionAddTodoSuccess(addTodo, id, date));
  };
};

// FETCH FROM BASE AFTER actionAddTodoSuccess

export const fetchTodoStart = () => {
  return {
    type: FETCH_TODO_START
  };
};

export const fetchTodoSuccess = fetchTodos => {
  return {
    type: FETCH_TODO_SUCCESS,
    payload: { ...fetchTodos }
  };
};
export const fetchTodoFailur = error => {
  return {
    type: FETCH_TODO_FAILUR,
    payload: { ...error }
  };
};

export const fetchTodos = () => {
  return async dispatch => {
    dispatch(fetchTodoStart());

    try {
      const todoRef = fire.database().ref("/todos");
      await todoRef.on("value", snapshot => {
        dispatch(fetchTodoSuccess(snapshot.val()));
      });
    } catch (error) {
      console.log("Error getting documents ", error.message);
      dispatch(fetchTodoFailur(error));
    }
  };
};

// remove todo

export const actionCreatorRemoveTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};
export const removeTodo = (id, dispatch) => {
  return dispatch => {
    fire
      .database()
      .ref(`/todos/${id}`)
      .remove();

    dispatch(actionCreatorRemoveTodo(id));
  };
};
