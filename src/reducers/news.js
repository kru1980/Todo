import { ADD_NEW } from "../constance/actionTypes";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NEW:
      return [...state, payload];
    default:
      return state;
  }
};
