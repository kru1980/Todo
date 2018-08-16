import {
  FETCH_TRACKS_START,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_FAILURE,
  ADD_NEW
} from "../typeActions";

import { fetchTracks as fetchTracksApi } from "../api";
const uuidv1 = require("uuid/v1");

export const fetchTracks = () => async dispatch => {
  dispatch({ type: FETCH_TRACKS_START });

  try {
    const tracks = await fetchTracksApi();
    dispatch({
      type: FETCH_TRACKS_SUCCESS,
      payload: tracks
    });
  } catch (error) {
    dispatch({
      type: FETCH_TRACKS_FAILURE,
      payload: error,
      error: true
    });
  }
};

export const addNews = textNew => dispatch => {
  const payload = {
    id: uuidv1(),
    readComleted: false,
    textNew
  };
  dispatch({ type: ADD_NEW, payload });
};
