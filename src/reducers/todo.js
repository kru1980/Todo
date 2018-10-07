import {
  ADD_TODO_SUCCESS,
  ADD_TODO_START,
  FETCH_TODO_START,
  FETCH_TODO_SUCCESS,
  DELETE_TODO
} from "../constance/actionTypes";

const R = require("ramda");

const initialState = {
  byId: {},
  allIds: [],
  loading: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO_START:
      return {
        ...state,
        loading: true
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        byId: {
          ...state.byId,
          [payload.id]: {
            ...payload
          }
        },
        allIds: state.allIds.concat(payload.id),
        loading: false,
        error: null
      };

    case FETCH_TODO_START:
      return {
        ...state,
        loading: true
      };

    case FETCH_TODO_SUCCESS:
      const allIds = Object.keys(payload);
      return {
        ...state,
        byId: {
          ...state.byId,
          ...payload
        },
        allIds,
        loading: false,
        error: null
      };

    case DELETE_TODO:
      const _byId = R.dissoc(payload, state.byId);
      const _allIds = R.without([payload], state.allIds);
      const newstate = {
        byId: { ..._byId },
        allIds: _allIds,
        loading: false
      };
      return {
        ...newstate
      };

    default:
      return state;
  }
};
