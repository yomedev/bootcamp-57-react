import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ExercisesPage/ProductsPage";
import CounterPage from "./pages/ExercisesPage/CounterPage";
import ExercisesPage from "./pages/ExercisesPage";
import NotFoundPage from "./pages/NotFoundPage";
import SingleArticlePage from "./pages/SingleArticlePage";
import ArticlesPage from "./pages/ArticlesPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="articles/:articleId" element={<SingleArticlePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="exercises" element={<ExercisesPage />}>
            <Route index element={<Navigate to='products' />} />
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
