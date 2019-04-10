import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
// import logger from "redux-logger";logger,
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import * as types from "./../todo/constants/ActionTypes";
import { saveTodo } from "./../services/todo";

export const history = createBrowserHistory();
const logger = store => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  switch (action.type) {
    case types.ADD_TODO:
    case types.CLEAR_COMPLETED:
    case types.COMPLETE_ALL_TODOS:
    case types.COMPLETE_TODO:
    case types.EDIT_TODO:
    case types.DELETE_TODO:
      saveTodo();
      break;
  }
  console.log("next state", store.getState());
  return result;
};

export default createStore(
  connectRouter(history)(rootReducer),
  applyMiddleware(routerMiddleware(history), logger)
);
