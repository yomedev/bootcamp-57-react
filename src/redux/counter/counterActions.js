export const PLUS = "plus";
export const MINUS = "minus";
export const QUANTITY = "quantity";

export const plusAction = () => ({ type: PLUS });
export const minusAction = () => ({ type: MINUS });
export const quantityAction = (quantity) => ({
  type: QUANTITY,
  payload: quantity,
});
