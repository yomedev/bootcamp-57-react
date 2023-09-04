import { MINUS, PLUS, QUANTITY } from "./counterActions";

const defaultState = 0;

export const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PLUS:
      return state + 1;
    case MINUS:
      return state.counter;
    case QUANTITY:
      return action.payload;
    default:
      return state;
  }
};
