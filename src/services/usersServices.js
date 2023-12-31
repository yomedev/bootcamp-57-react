import { publicApi, privateApi } from "./http";



export const registerService = async (body) => {
  const { data } = await publicApi.post("users/register", body);
  return data;
};

export const loginService = async (body) => {
  const { data } = await publicApi.post("users/login", body);
  return data;
};

export const getUserService = async () => {
  const { data } = await privateApi.get("users/me");
  return data;
};
