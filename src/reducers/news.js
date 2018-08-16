import news from "../api/mockNews";
import R from "ramda";
import { ADD_NEW } from "../constance/actionTypes";

const initialState = news;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NEW:
      return [...state, payload];
  }
  return state;
};
