import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import logger from "redux-logger";

import bookReducer from "./books/bookReducer";

const store = createStore(bookReducer, applyMiddleware(thunk, logger));

export default store;
