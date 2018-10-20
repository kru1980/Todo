import {
  ADD_TODO_SUCCESS,
  ADD_TODO_START,
  FETCH_TODO_START,
  FETCH_TODO_SUCCESS,
  DELETE_TODO,
  UPDATE_TODO_START,
  UPDATE_TODO_SUCCES
} from "../actions/actionsTypes";

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

        allIds: R.append(payload.id, state.allIds),
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
    case UPDATE_TODO_START:
      return {
        ...state,
        loading: true
      };
    case UPDATE_TODO_SUCCES:
      const { id, newTodoTitle } = payload;

      const updateElement = R.compose(
        R.assoc("titleTodo", newTodoTitle),
        R.prop(id)
      )(state.byId);

      const updateState = {
        byId: R.assoc(id, updateElement, state.byId),
        allIds: [...state.allIds],
        loading: false
      };
      return updateState;

    default:
      return state;
  }
};
