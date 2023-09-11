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
import { articlesReducer } from "./articles/articlesSlice";
import { usersReducer } from "./users/usersSlice";

const persistConfig = {
  key: "products",
  storage,
  whitelist: ["items"],
};

const tokenPersistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const persistedProductsReducer = persistReducer(persistConfig, productsReducer);
const persistedUsersReducer = persistReducer(tokenPersistConfig, usersReducer);

export const store = configureStore({
  reducer: {
    products: persistedProductsReducer,
    counter: counterReducer,
    articles: articlesReducer,
    users: persistedUsersReducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistore = persistStore(store);
