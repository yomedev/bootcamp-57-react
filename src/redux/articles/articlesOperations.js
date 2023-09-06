import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getArticlesService,
  createArticleService,
  deleteArticleService,
} from "../../services/articlesServices";

export const getArticles = createAsyncThunk("articles/getArticles", () =>
  getArticlesService()
);

export const createArticle = createAsyncThunk(
  "articles/createArticle",
  (body) => createArticleService(body)
);

export const deleteArticle = createAsyncThunk("articles/deleteArticle", (id) =>
  deleteArticleService(id)
);
