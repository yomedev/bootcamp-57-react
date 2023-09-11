import axios from "axios";

export const articlesApi = axios.create({
  baseURL: "http://localhost:5000/api/articles",
});

export const getArticlesService = async () => {
  const { data } = await articlesApi.get("");

  return data;
};

export const getSingleArticleService = async (id) => {
  const { data } = await articlesApi.get(`${id}`);
  return data;
};

export const createArticleService = async (body) => {
  const { data } = await articlesApi.post("", body);
  return data;
};

export const deleteArticleService = async (id) => {
  const { data } = await articlesApi.delete(`${id}`);
  return data;
};
