import { SIGNIN_USER_SUCCESS, SIGNIN_USER_FAIL } from "./typeActions";

export const signInAction = existingUser => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(existingUser.email, existingUser.password)
      .then(() => {
        dispatch({ type: SIGNIN_USER_SUCCESS });
      })
      .catch(error => {
        dispatch({ type: SIGNIN_USER_FAIL, error });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};
