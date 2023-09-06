import { createSlice } from "@reduxjs/toolkit";
import { fetchStatus } from "../../constants/fetchStatus";
import {
  createArticle,
  deleteArticle,
  getArticles,
} from "./articlesOperations";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  status: fetchStatus.Idle,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getArticles.pending, (state) => {
        state.isLoading = true;
        state.status = fetchStatus.Loading;
      })
      .addCase(getArticles.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.status = fetchStatus.Success;
        state.data = payload;
      })
      .addCase(getArticles.rejected, (state) => {
        state.isLoading = false;
        state.status = fetchStatus.Error;
        state.isError = true;
      })
      .addCase(createArticle.fulfilled, (state, { payload }) => {
        // state.data.push(payload);
      })
      .addCase(deleteArticle.fulfilled, (state, { payload }) => {
        state.data = state.data.filter(({ id }) => id !== payload.id);
      });
  },
});

export const articlesReducer = articlesSlice.reducer;
