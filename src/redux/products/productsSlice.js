import productsJson from "../../data/products.json";
import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  items: productsJson,
  isModalOpen: false,
  search: "",
  isInStock: false,
  category: "all",
  modalProduct: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState: defaultState,
  reducers: {
    addProduct: {
      prepare: (newProduct) => ({ payload: { ...newProduct, id: Date.now() } }),
      reducer: (state, { payload }) => {
        state.items.unshift(payload);
      },
    },
    deleteProduct: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
    },
    updateModalProduct: (state, { payload }) => {
      state.modalProduct = state.items.find(({ id }) => id === payload);
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    changeIsInStock: (state) => {
      state.isInStock = !state.isInStock;
    },
    changeSearch: (state, { payload }) => {
      state.search = payload;
    },
    changeCategory: (state, { payload }) => {
      state.category = payload;
    },
  },
});

export const productsReducer = productsSlice.reducer;

export const {
  addProduct,
  deleteProduct,
  updateModalProduct,
  toggleModal,
  changeIsInStock,
  changeCategory,
  changeSearch,
} = productsSlice.actions;
