import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { messages, users, friends, posts } from "./reducers";
import thunk from "redux-thunk"

const rootReducer = combineReducers({ messages, users, friends, posts })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// window.store = store

export default store;






