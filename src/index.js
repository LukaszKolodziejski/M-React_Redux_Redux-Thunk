import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
//------------------------------------------------------
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import reducer from "./store/reducer";
import counterReducer from "./store/reducers/counter";
import resultsReducer from "./store/reducers/results";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultsReducer,
});
// Middleware >>>>>>>>>>>>>>>

// const logger = (store) => (next) => (action) => {
//   console.log("[Middleware] Dispatching: ", action);
//   const result = next(action);
//   console.log("[Middleware] Next State: ", store.getState());
//   return result;
// };

// This middleware send: dispatch(action)
const logger = (store) => (next) => (action) => next(action);
// logger is Synchronous
// thunk is Asynchronous

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// <<<<<<<<<<<<<<<<<<<<<<<<<<

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
  // composeEnhancers(applyMiddleware(thunk))
);
//------------------------------------------------------

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
