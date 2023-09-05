export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const CHANGE_SEARCH = "CHANGE_SEARCH";
export const CHANGE_IS_IN_STOCK = "CHANGE_IS_IN_STOCK";
export const CHANGE_CATEGORY = "CHANGE_CATEGORY";
export const UPDATE_MODAL_PRODUCT = "UPDATE_MODAL_PRODUCT";

export const toggleModalAction = () => ({ type: TOGGLE_MODAL });

export const addProductAction = (newProduct) => ({
  type: ADD_PRODUCT,
  payload: newProduct,
});

export const removeProductAction = (productId) => ({
  type: REMOVE_PRODUCT,
  payload: productId,
});

export const updateModalProductAction = (productId) => ({
  type: UPDATE_MODAL_PRODUCT,
  payload: productId,
});

export const changeSearchAction = (value) => ({
  type: CHANGE_SEARCH,
  payload: value,
});

export const changeIsInStockAction = () => ({ type: CHANGE_IS_IN_STOCK });

export const changeCategoryAction = (value) => ({
  type: CHANGE_CATEGORY,
  payload: value,
});
