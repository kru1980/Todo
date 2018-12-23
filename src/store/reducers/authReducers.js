import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAIL,
  SIGNOUT_SUCCESS
} from "../actions/typeActions";

const initial = {
  authError: null
};

const authReducers = (state = initial, action) => {
  switch (action.type) {
    case SIGNIN_USER_SUCCESS:
      console.log("SIGNIN_USER_SUCCESS");
      return {
        ...state,
        authError: null
      };

    case SIGNIN_USER_FAIL:
      console.log("SIGNIN_USER_FAIL");
      return {
        ...state,
        authError: action.error.message
      };
    case SIGNOUT_SUCCESS:
      console.log("SIGNOUT_SUCCESS");
      return state;
    case CREATE_USER_SUCCESS:
      console.log("CREATE_USER_SUCCESS");
      return state;

    case CREATE_USER_FAIL:
      console.log("CREATE_USER_FAIL");
      return {
        ...state,
        authError: action.error.message
      };

    default:
      return state;
  }
};

export default authReducers;
