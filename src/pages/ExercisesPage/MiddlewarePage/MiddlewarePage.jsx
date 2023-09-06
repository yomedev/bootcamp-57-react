import { useDispatch } from "react-redux";
import { getArticlesThunk } from "../../../redux/store";
// import { getArticles } from "../../../services/articlesServices";

export const MiddlewarePage = () => {
  const dispatch = useDispatch()

  const handleFetch = () => {
    dispatch(getArticlesThunk())
    dispatch({type: 'test'})
  }

  return (
    <button className="btn btn-primary my-4" onClick={handleFetch}>
      Get articles
    </button>
  );
};
