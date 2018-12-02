import {
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAIL,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  SIGNOUT_SUCCESS
} from "./typeActions";

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
        dispatch({ type: SIGNOUT_SUCCESS });
      });
  };
};

export const signUpAction = ({ email, password, nickname }, rest) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        return firestore
          .collection("users")
          .doc(response.user.uid)
          .set({
            email,
            password,
            nickname
          });
      })
      .then(() => dispatch({ type: CREATE_USER_SUCCESS }))
      .catch(error => {
        dispatch({ type: CREATE_USER_FAIL, error });
      });
  };
};
