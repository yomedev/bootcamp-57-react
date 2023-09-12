import axios from "axios";

export const publicApi = axios.create({
  baseURL: "http://localhost:5000/api/",
});

export const privateApi = axios.create({
  baseURL: "http://localhost:5000/api/",
});

export const token = {
  set(tokenValue) {
    privateApi.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${tokenValue}`;
  },
  unset() {
    privateApi.defaults.headers.Authorization = null;
  },
};
