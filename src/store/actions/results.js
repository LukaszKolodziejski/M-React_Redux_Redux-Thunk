import { STORE_RESULTS, DELETE_RESULTS } from "./actionsTypes";

// Asynchronous with 'redux-thunk'

// In Counter.js I send: dispatch(actionCreators)
// but here I dispatch another fn() with this action
// So I need here middleware like 'redux-thunk'
// to execute asynchronous dispatch(action) later.
// And this 'redux-thunk' work between Action and Reducer.

//// Full orginal version for 'redux-thunk' \\\\
// export const storeResults = (value) => {
//   return (dispatch) => {
//     setTimeout(() => dispatch(saveResults(value)), 1000);
//   };
// };
////|||\\\\

export const saveResults = (value) => ({ type: STORE_RESULTS, value });
// export const storeResults = (value) => (dispatch) => {
//   setTimeout(() => dispatch(saveResults(value)), 1000);
// };
export const storeResults = (value) => (dispatch) => {
  setTimeout(() => dispatch(saveResults(value)), 1000);
};

export const deleteResults = (value) => ({ type: DELETE_RESULTS, value });
