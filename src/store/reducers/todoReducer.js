import { CREATE_TODO_SUCCESS, CREATE_TODO_FAIL } from "../actions/typeActions";

const initState = {
  projects: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "blah blah blah" },
    { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" }
  ]
};

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
