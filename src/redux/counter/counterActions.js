import { createAction } from "@reduxjs/toolkit";

// export const PLUS = "plus";
// export const MINUS = "minus";
// export const QUANTITY = "quantity";

// export const plusAction = () => ({ type: "plus" });
// export const minusAction = () => ({ type: MINUS });
// export const quantityAction = (quantity) => ({
//   type: QUANTITY,
//   payload: quantity,
// });

export const plusAction = createAction("plus");
export const minusAction = createAction("minus");
export const quantityAction = createAction("quantity");


