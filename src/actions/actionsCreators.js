import {
  ADD_TODO_SUCCESS,
  ADD_TODO_START,
  FETCH_TODO_START,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILUR,
  DELETE_TODO,
  UPDATE_TODO_SUCCES,
  UPDATE_TODO_START,
  UPDATE_TODO_FAILURE
} from "../actions/actionsTypes";

import { fbRef, fbRefTodo } from "../firebase";

export const addTodoStart = () => {
  return {
    type: ADD_TODO_START
  };
};

export const actionAddTodoSuccess = (addTodo, id, date, dateCompletedTod) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: { ...addTodo, id, date, dateCompletedTod }
  };
};

export const addTodo = addTodo => {
  return async dispatch => {
    dispatch(addTodoStart());
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    };
    const date = new Date(Date.now()).toLocaleDateString("ru-RU", options);
    const dateCompletedTod = addTodo.datePicker;
    const newTodo = fbRefTodo.push();
    const id = newTodo.key;

    await newTodo.set({
      titleTodo: addTodo.titleTodo,
      dateCompletedTod: addTodo.datePicker, // че бля за название
      id,
      date,
      completed: false
    });

    dispatch(actionAddTodoSuccess(addTodo, id, date, dateCompletedTod));
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
      await fbRefTodo.on("value", snapshot => {
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
    fbRef.child(`/todos/${id}`).remove();

    dispatch(actionCreatorRemoveTodo(id));
  };
};

// update todo

export const actionUpdateTodoStart = () => {
  return {
    type: UPDATE_TODO_START
  };
};

export const actionCreatorUpdateTodo = (id, newTodoTitle) => {
  return {
    type: UPDATE_TODO_SUCCES,
    payload: {
      id,
      newTodoTitle
    }
  };
};
export const actionUpdateTodoFailure = error => {
  return {
    type: UPDATE_TODO_FAILURE,
    payload: error,
    error: true
  };
};

export const updateTodo = (id, newTodoTitle, dateCompletedTod, dispatch) => {
  try {
    return async dispatch => {
      dispatch(actionUpdateTodoStart());

      let options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
      };
      const date = new Date(Date.now()).toLocaleDateString("ru-RU", options);

      const refUpdateTodo = fbRef.child(`todos/${id}`);

      await refUpdateTodo.set({
        titleTodo: newTodoTitle,
        dateCompletedTod,
        id,
        date,
        completed: false
      });

      dispatch(
        actionCreatorUpdateTodo(id, newTodoTitle, dateCompletedTod, date)
      );
    };
  } catch (error) {
    dispatch(actionUpdateTodoFailure(error));
  }
};
