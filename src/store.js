import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import search from "./consumers/search";
import promise from "redux-promise-middleware";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ search });

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(promise))
);

export default store;
