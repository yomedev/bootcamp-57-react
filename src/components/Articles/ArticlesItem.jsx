import formatDistanceToNow from "date-fns/formatDistanceToNow";

import { cutString } from "../../helpers/cut-string";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import { deleteArticleService } from "../../services/articlesServices";
import { toast } from "react-toastify";

export const ArticlesItem = ({ article }) => {
  const { isLogin } = useContext(AuthContext);

  const location = useLocation();

  if (!article) {
    return;
  }

  const handleDelete = () => {
    deleteArticleService(article.id)
      .then(() => toast.success("Article deleted successfully"))
      .catch(() => toast.error("Something went wrong"));
  };

  return (
    <div className="col-12 col-lg-6 col-xl-4 mb-4">
      <div className="card">
        <img
          height="250px"
          alt={article.title}
          src={article.urlToImage || "/default_image.png"}
          className="card-img-top"
          style={{ objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>

          <p className="card-text">{cutString(article.description, 60)}</p>

          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">Author: {article.author}</li>
            <li className="list-group-item">
              Created: {formatDistanceToNow(new Date(article.publishedAt))}
            </li>
          </ul>

          {isLogin && (
            <div className="d-flex">
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDelete}
              >
                Delete article
              </button>

              <Link
                state={{ from: location }}
                to={article.id}
                className="btn btn-primary ms-3"
              >
                Read article
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
