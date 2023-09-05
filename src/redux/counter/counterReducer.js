import {
  minusAction,
  plusAction,
  quantityAction,
} from "./counterActions";
import { createReducer } from "@reduxjs/toolkit";

const defaultState = 1;

// export const counterReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case PLUS:
//       return state + 1;
//     case MINUS:
//       return state - 1;
//     case QUANTITY:
//       return action.payload;
//     default:
//       return state;
//   }
// };

export const counterReducer = createReducer(defaultState, {
  [plusAction]: (state) => state + 1,
  [minusAction]: (state) => state - 1,
  [quantityAction]: (_, action) => action.payload,
});
