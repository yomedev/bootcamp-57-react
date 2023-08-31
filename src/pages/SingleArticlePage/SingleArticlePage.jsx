import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import { Loader } from "../../components/Loader";
import { getSingeArticleService } from "../../services/articlesServices";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

export const SingleArticlePage = () => {
  const { articleId } = useParams();

  const location = useLocation();
  
  console.log(location.state);
  const prevLocation = location.state?.from ?? "/articles";

  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getSingeArticleService(articleId)
      .then(setArticle)
      .catch(() => {
        toast.error("Something went wrong!");
      })
      .finally(() => setIsLoading(false));
  }, [articleId]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    article && (
      <>
        <Link to={prevLocation} className="btn btn-primary my-3">
          Back
        </Link>
        <img
          src={article.urlToImage || "/default_image.png"}
          alt={article.title}
          className="img-fluid mb-4"
          style={{ maxHeight: "600px", width: "100%", objectFit: "cover" }}
        />
        <h1 className="mb-5">{article.title}</h1>

        <div>{article.description}</div>

        <Link to="comments" state={location.state} className="btn btn-primary my-4">
          Vew post comments
        </Link>
        <Outlet />
      </>
    )
  );
};
