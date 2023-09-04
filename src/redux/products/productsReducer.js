import { ADD_PRODUCT, CHANGE_SEARCH, REMOVE_PRODUCT, TOGGLE_MODAL } from "./productsActions";

const defaultState = {
  items: [],
  isModalOpen: false,
  search: "",
};

export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, isModalOpen: !state.isModalOpen };
    case REMOVE_PRODUCT:
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== action.payload),
      };
    case ADD_PRODUCT:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case CHANGE_SEARCH:
      return {
        ...state,
        search: action.payload
      };
    default:
      return state;
  }
};
