import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";

import news from "./news";

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  news
});
