import { createSelector } from "@reduxjs/toolkit";

export const selectIsModalOpen = (state) => state.products.isModalOpen;

export const selectProducts = (state) => state.products.items;

export const selectProductsSearch = (state) => state.products.search;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectProductsSearch],
  (products, search) => {
    console.log("selectFilteredProducts");
    return products.filter(({ title }) =>
      title.toLowerCase().includes(search.toLowerCase().trim())
    );
  }
);

export const selectTotalWithDiscount = createSelector(
  selectFilteredProducts,
  (filteredProducts) => {
    return filteredProducts.reduce(
      (acc, { discountPercentage }) => (discountPercentage > 0 ? acc + 1 : acc),
      0
    );
  }
);
