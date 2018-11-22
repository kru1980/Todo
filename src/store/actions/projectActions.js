import { CREATE_TODO_SUCCESS, CREATE_TODO_FAIL } from "./typeActions";

export const createdTodo = todo => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const fireStore = getFirestore();
    fireStore
      .collection("todos")
      .add({
        ...todo,
        title: todo.titleTodo,
        description: todo.titleTodo,
        timeCreatedTodo: Date.now(),
        dateTodoCompleted: todo.datePicker,
        author: "Rodik",
        authorId: 123456789,
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
