import {
  ADD_TODO_SUCCESS,
  ADD_TODO_START,
  FETCH_TODO_START,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILUR,
  DELETE_TODO,
  UPDATE_TODO
} from "../actions/actionsTypes";

import { fbRef, fbRefTodo } from "../firebase";

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

    const newTodo = fbRefTodo.push();
    const id = newTodo.key;

    await newTodo.set({
      titleTodo: addTodo.titleTodo,
      dateCompletedTod: addTodo.datePicker, // че бля за название
      id,
      date,
      completed: false
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

export const actionCreatorUpdateTodo = (id, newTodoTitle) => {
  return {
    type: UPDATE_TODO,
    payload: {
      id,
      newTodoTitle
    }
  };
};

export const updateTodo = (id, newTodoTitle, dispatch) => {
  // передать аргументом данные старого dateCompletedTod
  return async dispatch => {
    // fb
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    };
    const date = new Date(Date.now()).toLocaleDateString("ru-RU", options);

    // let updatesTodo = {
    //   titleTodo: newTodoTitle,
    //   // dateCompletedTod: addTodo.datePicker,
    //   id,
    //   date,
    //   completed: false
    // };

    let refUpdateTodo = fbRef.child(`todo/${id}`);
    await refUpdateTodo.set({
      titleTodo: newTodoTitle,
      // dateCompletedTod: addTodo.datePicker,
      id,
      date,
      completed: false
    });
    console.log(refUpdateTodo); // не работает

    // после обновления базы, обновляем state
    dispatch(actionCreatorUpdateTodo(id, newTodoTitle));
  };
};
