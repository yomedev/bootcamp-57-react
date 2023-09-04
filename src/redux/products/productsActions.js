export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const CHANGE_SEARCH = "CHANGE_SEARCH"

export const toggleModalAction = () => ({ type: TOGGLE_MODAL });

export const addProductAction = (newProduct) => ({
  type: ADD_PRODUCT,
  payload: newProduct,
});

export const removeProductAction = (productId) => ({
  type: REMOVE_PRODUCT,
  payload: productId,
});

export const changeSearchAction = (value) => ({ type: CHANGE_SEARCH, payload: value})
