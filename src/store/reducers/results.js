import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  results: [],
};

const storeResults = (state, action) => ({
  ...state,
  results: state.results.concat({
    id: Math.random(),
    value: action.value,
  }),
});
const delateResults = (state, action) => ({
  ...state,
  results: state.results.filter((result) => result.id !== action.value),
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULTS:
      return storeResults(state, action);
    case actionTypes.DELETE_RESULTS:
      return delateResults(state, action);
    default:
      return state;
  }
};

export default reducer;
