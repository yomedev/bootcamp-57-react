import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import { Loader } from "../../components/Loader";
import { getSingeArticleService } from "../../services/articlesServices";
import { useParams } from "react-router-dom";

export const SingleArticlePage = () => {
  const { articleId } = useParams();

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
        <img
          src={article.urlToImage || "/default_image.png"}
          alt={article.title}
          className="img-fluid mb-4"
          style={{ maxHeight: "600px", width: "100%", objectFit: "cover" }}
        />
        <h1 className="mb-5">{article.title}</h1>

        <div>{article.description}</div>

        {/* <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>') }} /> */}
      </>
    )
  );
};
