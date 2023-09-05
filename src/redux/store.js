import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/counterReducer";
import { productsReducer } from "./products/productsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "products",
  storage,
  whitelist: ["items"],
};

const persistedProductsReducer = persistReducer(persistConfig, productsReducer);

export const store = configureStore({
  reducer: {
    products: persistedProductsReducer,
    counter: counterReducer,
  },
  // reducer: {
  //   counter: counterReducer,
  //   products: productsReducer,
  // },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistore = persistStore(store);
