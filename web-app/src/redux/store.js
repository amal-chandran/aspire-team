import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
// import logger from "redux-logger";logger,
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()

export default createStore(
    connectRouter(history)(rootReducer),
    applyMiddleware(routerMiddleware(history))
);
