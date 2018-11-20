import { CREATE_USER_SUCCESS, CREATE_USER_FAIL } from "../actions/typeActions";

const initial = {};

const authReducers = (state = initial, { type, payload }) => {
  switch (type) {
    case CREATE_USER_SUCCESS:
      console.log("CREATE_USER_SUCCESS");
      return state;
    default:
      return state;
  }
};

export default authReducers;
