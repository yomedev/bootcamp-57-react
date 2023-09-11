import { createSlice } from "@reduxjs/toolkit";
import { getUserThunk, loginThunk, registerThunk } from "./usersThunk";
import { fetchStatus } from "../../constants/fetchStatus";

const initialState = {
  status: fetchStatus.Idle,
  isLoading: false,
  isError: false,
  user: null,
  token: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.pending, (state) => {
        state.status = fetchStatus.Loading;
        state.isLoading = true;
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.status = fetchStatus.Success;
        state.isLoading = false;
        state.user = {
          name: payload.name,
          email: payload.email,
          id: payload._id,
        };
        state.token = payload.token;
      })
      .addCase(registerThunk.rejected, (state) => {
        state.status = fetchStatus.Error;
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(loginThunk.pending, (state) => {
        state.status = fetchStatus.Loading;
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.status = fetchStatus.Success;
        state.isLoading = false;
        state.user = {
          name: payload.name,
          email: payload.email,
          id: payload._id,
        };
        state.token = payload.token;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.status = fetchStatus.Error;
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getUserThunk.pending, (state) => {
        state.status = fetchStatus.Loading;
        state.isLoading = true;
      })
      .addCase(getUserThunk.fulfilled, (state, { payload }) => {
        state.status = fetchStatus.Success;
        state.isLoading = false;
        state.user = {
          name: payload.name,
          email: payload.email,
          id: payload._id,
        };
      })
      .addCase(getUserThunk.rejected, (state) => {
        state.status = fetchStatus.Error;
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const usersReducer = usersSlice.reducer;
