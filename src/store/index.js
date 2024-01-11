//src/store/index.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import {thunk}from 'redux-thunk';

import { postsReducer } from "./reducers";

const rootReducer = combineReducers({
  posts: postsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export * from "./actions";
