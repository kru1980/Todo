import { CREATE_TODO_SUCCESS, CREATE_TODO_FAIL } from "../actions/typeActions";

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
    default:
      return state;
  }
};

export default todoReducer;
