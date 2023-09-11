import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserService, loginService, registerService } from "../../services/usersServices";

export const registerThunk = createAsyncThunk('users/register', (body) => {
  return registerService(body)
})

export const loginThunk = createAsyncThunk('users/login', (body) => {
  return loginService(body)
})

export const getUserThunk = createAsyncThunk('users/getUser', () => {
  return getUserService()
})