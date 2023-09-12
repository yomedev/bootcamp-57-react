import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUserService,
  loginService,
  registerService,
} from "../../services/usersServices";
import { token } from "../../services/http";
import { selectToken } from "./usersSelectors";

export const registerThunk = createAsyncThunk(
  "users/register",
  async (body, { rejectWithValue }) => {
    try {
      const data = await registerService(body);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const loginThunk = createAsyncThunk(
  "users/login",
  async (body, { rejectWithValue }) => {
    try {
      const data = await loginService(body);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const getUserThunk = createAsyncThunk(
  "users/getUser",
  async (_, {rejectWithValue, getState}) => {
    try {
      const tokenValue = selectToken(getState())
      token.set(tokenValue)
      const data = await getUserService();
      return data;
    } catch (error) {
      token.unset();
      return rejectWithValue();
    }
  }
);
