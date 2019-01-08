import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAIL,
  SIGNOUT_SUCCESS,
  CLEAR_ERROR_SERVER_MESSAGE_SUCCESS,
  ADD_USER_FOTO_SUCCESS,
  ADD_USER_FOTO_FAIL
} from "../actions/typeActions";

const initial = {
  authError: null,
  authErrorFoto: null
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
    case CLEAR_ERROR_SERVER_MESSAGE_SUCCESS:
      console.log("CLEAR_ERROR_SERVER_MESSAGE_SUCCESS");
      return {
        ...state,
        authError: null
      };
    case ADD_USER_FOTO_SUCCESS:
      console.log("ADD_USER_FOTO_SUCCESS");
      return {
        ...state,
        authErrorFoto: null
      };
    case ADD_USER_FOTO_FAIL:
      console.log("ADD_USER_FOTO_FAIL");
      return {
        ...state,
        authErrorFoto: action.error.message
      };

    default:
      return state;
  }
};

export default authReducers;
