import axios from "axios";

// axios.defaults.baseURL = "https://newsapi.org/v2/";
// axios.defaults.params = {
//   apiKey: "8cb01996c0d34dbebd5fe5c1bf4080cf",
//   pageSize: 6,
//   searchIn: "title",
// };

// export const getArticles = async (query, page = 1) => {
//   const { data } = await axios.get("everything", {
//     params: { q: query || "javascript", page },
//   });
//   return data;
// };

// export const getSingeArticleService = async (query) => {
//   const { data } = await axios.get("everything", {
//     params: {
//       q: query,
//       searchIn: "title",
//       pageSize: 4,
//     },
//   });
//   return data.articles[0];
// };

const articlesApi = axios.create({
  baseURL: "https://642db3cc66a20ec9cea44565.mockapi.io/",
});

export const getArticlesService = async () => {
  const { data } = await articlesApi.get("articles");

  return data;
};

export const getSingleArticleService = async (id) => {
  const { data } = await articlesApi.get(`articles/${id}`);
  return data;
};

export const createArticleService = async (body) => {
  const { data } = await articlesApi.post("articles", body);
  return data;
};

export const deleteArticleService = async (id) => {
  const { data } = await articlesApi.delete(`articles/${id}`);
  return data;
};
