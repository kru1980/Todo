import {
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAIL,
  DELETE_TODO_FAIL,
  DELETE_TODO_SUCCESS,
  TASK_COMPLETED_SUCCESS,
  TASK_COMPLETED_FAIL
} from "../actions/typeActions";

const initState = {};

const todoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case CREATE_TODO_SUCCESS:
      return {
        ...state
      };
    case CREATE_TODO_FAIL:
      return { ...state };

    case DELETE_TODO_SUCCESS:
      return { ...state };
    case DELETE_TODO_FAIL:
      return { ...state };
    case TASK_COMPLETED_SUCCESS:
      return { ...state };
    case TASK_COMPLETED_FAIL:
      return { ...state };
    default:
      return state;
  }
};

export default todoReducer;
