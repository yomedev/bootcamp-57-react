import { Button } from "../../components/Button";
import { ArticlesItem } from "../../components/Articles/ArticlesItem";
import { ArticlesSearch } from "../../components/Articles/ArticlesSearch";
import { ArticlesLoader } from "../../components/Articles/ArticlesLoader";
import { ArticlesError } from "../../components/Articles/ArticlesError/ArticlesError";
import { getArticles } from "../../services/articlesServices";
import { useCallback } from "react";
import { useFetch } from "../../hooks/useFetch";
import { fetchStatus } from "../../constants/fetchStatus";
import { useSearchParams } from "react-router-dom";

export const ArticlesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get("page") ?? 1;
  const queryParam = searchParams.get("query") ?? "";

  const queryParams = Object.fromEntries([...searchParams]);

  const fetchArticles = useCallback(
    () => getArticles(queryParam, pageParam),
    [pageParam, queryParam]
  );

  const { data, status } = useFetch(fetchArticles);

  if (status === fetchStatus.Loading || status === fetchStatus.Idle) {
    return <ArticlesLoader />;
  }

  if (status === fetchStatus.Error) {
    return <ArticlesError />;
  }

  const { articles } = data;

  return (
    <>
      <ArticlesSearch />
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
              onClick={() =>
                setSearchParams({ ...queryParams, page: index + 1 })
              }
              disabled={index + 1 === pageParam}
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
