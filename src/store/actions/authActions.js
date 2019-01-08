import {
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAIL,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  SIGNOUT_SUCCESS,
  CLEAR_ERROR_SERVER_MESSAGE_SUCCESS,
  ADD_USER_FOTO_SUCCESS,
  ADD_USER_FOTO_FAIL
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

    firebase.logout().then(() => {
      dispatch({ type: SIGNOUT_SUCCESS });
    });
  };
};
// export const signOut = () => {
//   return (dispatch, getState, { getFirebase }) => {
//     const firebase = getFirebase();

//     firebase
//       .auth()
//       .signOut()
//       .then(() => {
//         dispatch({ type: SIGNOUT_SUCCESS });
//       });
//   };
// };

export const signUpAction = ({ email, password, displayName }, rest) => {
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
            displayName,
            photoURL: null,
            role: "user"
          });
      })
      // .then(response => {
      //   var user = firebase.auth().currentUser;
      //   user.sendEmailVerification().then(function() {
      //     // Email sent.
      //     console.log("user", user);
      //   });
      // })
      .then(() => dispatch({ type: CREATE_USER_SUCCESS }))
      .catch(error => {
        dispatch({ type: CREATE_USER_FAIL, error });
      });
  };
};

export const clearErrorServerMessageAction = () => {
  return dispatch => {
    dispatch({ type: CLEAR_ERROR_SERVER_MESSAGE_SUCCESS });
  };
};

export const addFotoUserAction = file => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const state = getState();
    const firestore = getFirestore();
    const firebase = getFirebase();

    const authorId = state.firebase.auth.uid;
    const storageRef = firebase
      .storage()
      .ref()
      .child(`imgUserFoto/${authorId}`);

    storageRef
      .put(file)
      .then(() => {
        storageRef.getDownloadURL().then(url => {
          return firestore
            .collection("users")
            .doc(authorId)
            .update({
              photoURL: url
            });
        });
      })
      .then(() => {
        dispatch({ type: ADD_USER_FOTO_SUCCESS });
      })
      .catch(error => {
        dispatch({ type: ADD_USER_FOTO_FAIL, error });
      });
  };
};
