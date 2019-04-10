import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

const rootReducer = {
  todos,
  visibilityFilter
};

export default rootReducer;
