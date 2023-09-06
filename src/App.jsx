import { Layout } from "./components/Layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";

import LoginPage from "./pages/LoginPage";
// import ProductsPage from "./pages/ExercisesPage/ProductsPage";
// import CounterPage from "./pages/ExercisesPage/CounterPage";
// import ExercisesPage from "./pages/ExercisesPage";
import NotFoundPage from "./pages/NotFoundPage";
import SingleArticlePage from "./pages/SingleArticlePage";
import CommentsPage from "./pages/SingleArticlePage/CommentsPage";
import { MiddlewarePage } from "./pages/ExercisesPage/MiddlewarePage/MiddlewarePage";
const HomePage = lazy(() => import("./pages/HomePage"));
const ArticlesPage = lazy(() => import("./pages/ArticlesPage"));
const ExercisesPage = lazy(() => import("./pages/ExercisesPage"));
const ProductsPage = lazy(() => import("./pages/ExercisesPage/ProductsPage"))
const CounterPage = lazy(() => import("./pages/ExercisesPage/CounterPage"))

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route path="articles" element={<ArticlesPage />} />

            <Route path="articles/:articleId" element={<SingleArticlePage />}>
              <Route path="comments" element={<CommentsPage />} />
            </Route>

            <Route path="login" element={<LoginPage />} />

            <Route path="exercises" element={<ExercisesPage />}>
              <Route index element={<Navigate to="products" />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="counter" element={<CounterPage />} />
              <Route path="middleware" element={<MiddlewarePage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
