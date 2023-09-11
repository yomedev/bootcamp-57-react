import axios from "axios";
import { articlesApi } from "./articlesServices";

const usersApi = axios.create({
  baseURL: "http://localhost:5000/api/users",

});

export const token = {
  set(tokenValue) {
    console.log(tokenValue);
    usersApi.defaults.headers.common["Authorization"] = `Bearer ${tokenValue}`;
    articlesApi.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${tokenValue}`;
  },
  unset() {
    usersApi.defaults.headers.Authorization = null;
    articlesApi.defaults.headers.Authorization = null;
  },
};

export const registerService = async (body) => {
  const { data } = await usersApi.post("register", body);
  return data;
};

export const loginService = async (body) => {
  const { data } = await usersApi.post("login", body);
  return data;
};

export const getUserService = async () => {
  const { data } = await usersApi.get("me");
  return data;
};
