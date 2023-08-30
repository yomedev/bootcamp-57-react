import { Button } from "../../components/Button";
import { ArticlesItem } from "../../components/Articles/ArticlesItem";
import { ArticlesSearch } from "../../components/Articles/ArticlesSearch";
import { ArticlesLoader } from "../../components/Articles/ArticlesLoader";
import { ArticlesError } from "../../components/Articles/ArticlesError/ArticlesError";
import { getArticles } from "../../services/articlesServices";
import { useState } from "react";
import { useCallback } from "react";
import { useFetch } from "../../hooks/useFetch";
import { fetchStatus } from "../../constants/fetchStatus";

export const ArticlesPage = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const fetchArticles = useCallback(
    () => getArticles(query, page),
    [page, query]
  );

  const { data, status } = useFetch(fetchArticles);

  const handleSearch = (query) => {
    setQuery(query);
    setPage(1);
  };

  if (status === fetchStatus.Loading || status === fetchStatus.Idle) {
    return <ArticlesLoader />;
  }

  if (status === fetchStatus.Error) {
    return <ArticlesError />;
  }

  const { articles } = data;

  return (
    <>
      <ArticlesSearch onSubmitSearch={handleSearch} />
      <div className="container-fluid g-0">
        <div className="row">
          {articles?.map((article) => (
            <ArticlesItem key={article.url} article={article} />
          ))}
        </div>
      </div>

      <div className="pagination">
        <div className="btn-group my-4 mx-auto btn-group-lg">
          {[...Array(5)].map((_, index) => (
            <Button
              onClick={() => setPage(index + 1)}
              disabled={index + 1 === page}
              key={index}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
