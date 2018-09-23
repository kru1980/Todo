import {
  ADD_TODO_SUCCESS,
  ADD_TODO_START,
  FETCH_TODO_START,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILUR
} from "../constance/actionTypes";

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
      console.log("payload from reduser ", payload);
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

    default:
      return state;
  }
};
