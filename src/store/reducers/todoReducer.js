import {
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAIL,
  DELETE_TODO_FAIL,
  DELETE_TODO_SUCCESS
} from "../actions/typeActions";

const initState = {};

const todoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case CREATE_TODO_SUCCESS:
      console.log("create project success");
      return {
        ...state
      };
    case CREATE_TODO_FAIL:
      console.log("create project fail");
      return { ...state };

    case DELETE_TODO_SUCCESS:
      console.log("todo delete success");
      return { ...state };
    case DELETE_TODO_FAIL:
      console.log("todo delete fail");
      return { ...state };
    default:
      return state;
  }
};

export default todoReducer;
