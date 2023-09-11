import { Layout } from "./components/Layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, useEffect } from "react";

import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SingleArticlePage from "./pages/SingleArticlePage";
import CommentsPage from "./pages/SingleArticlePage/CommentsPage";
import { NewArticlePage } from "./pages/NewArticlePage/NewArticlePage";
import { JoinPage } from "./pages/JoinPage/JoinPage";
import { useDispatch, useSelector } from "react-redux";
import { getUserThunk } from "./redux/users/usersThunk";
import { selectToken } from "./redux/users/usersSelectors";
import { token } from "./services/usersServices";
const HomePage = lazy(() => import("./pages/HomePage"));
const ArticlesPage = lazy(() => import("./pages/ArticlesPage"));
const ExercisesPage = lazy(() => import("./pages/ExercisesPage"));
const ProductsPage = lazy(() => import("./pages/ExercisesPage/ProductsPage"));
const CounterPage = lazy(() => import("./pages/ExercisesPage/CounterPage"));

const App = () => {
  const dispatch = useDispatch();
  const tokenValue = useSelector(selectToken);

  useEffect(() => {
    if (tokenValue) {
      token.set(tokenValue)
      dispatch(getUserThunk());
    }
  }, [dispatch, tokenValue]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="articles" element={<ArticlesPage />} />
          <Route path="new-article" element={<NewArticlePage />} />
          <Route path="articles/:articleId" element={<SingleArticlePage />}>
            <Route path="comments" element={<CommentsPage />} />
          </Route>

          <Route path="login" element={<LoginPage />} />
          <Route path="join" element={<JoinPage />} />

          <Route path="exercises" element={<ExercisesPage />}>
            <Route index element={<Navigate to="products" />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="counter" element={<CounterPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
