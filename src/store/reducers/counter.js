import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  return action.type === actionTypes.COUNTER
    ? { ...state, counter: state.counter + action.value }
    : state;
};

export default reducer;
