import { createStore, applyMiddleware, combineReducers } from "redux";
import promise from "redux-promise-middleware";
import resultsReducer from "./resultsReducer.js";

const rootReducer = combineReducers({
  resultsReducer
});

export default createStore(rootReducer, applyMiddleware(promise));
