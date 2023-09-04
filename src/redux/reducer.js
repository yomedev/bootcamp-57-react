import { combineReducers } from "redux";
import { counterReducer } from "./counter/counterReducer";
import { productsReducer } from "./products/productsReducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  products: productsReducer,
});

// {
//   counter: 7,
//   products: {
//     items: [],
//     isModalOpen: false,
//     search: "",
//   }
// }
