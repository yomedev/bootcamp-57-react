import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducer";
import { getArticles } from "../services/articlesServices";
import thunk from "redux-thunk";

// const middleware = (store) => (next) => (action) => {
//   console.log(action);
//   if (typeof action === "function") {
//     action(store.dispatch);
//   }
//   return next(action);
// };

export const getArticlesThunk = () => async (dispatch) => {
  dispatch({ type: "setArtclesLoading" });
  try {
    const data = await getArticles();
    dispatch({ type: "setArticlesSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "setArticlesError", payload: error });
  }
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
