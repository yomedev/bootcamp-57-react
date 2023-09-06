import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducer";
import { getArticles } from "../services/articlesServices";

const middleware = (store) => (next) => (action) => {
  console.log(action);
  if (typeof action === "function") {
    action(store.dispatch)
  }
  return next(action);
};

export const getArticlesThunk = () => async (dispatch) => {
  const data = await getArticles();
  dispatch({ type: 'setArticles', payload: data})
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(middleware))
);
