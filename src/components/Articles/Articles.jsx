import { Button } from "../Button";
import { ArticlesItem } from "./ArticlesItem";
import { ArticlesSearch } from "./ArticlesSearch";
import { ArticlesLoader } from "./ArticlesLoader";
import { ArticlesError } from "./ArticlesError/ArticlesError";
import { getArticles } from "../../services/articlesServices";
import { useState } from "react";
import { useCallback } from "react";
import { useFetch } from "../../hooks/useFetch";

const fetchStatus = {
  Idle: "idle",
  Loading: "loading",
  Success: "success",
  Error: "error",
};

export const Articles = () => {
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

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
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
          {true && <Button onClick={handleLoadMore}>Load more</Button>}
        </div>
      </div>
    </>
  );
};

// export class Articles extends Component {
//   state = {
//     articles: null,
//     status: fetchStatus.Idle,
//     isLoading: false,
//     isError: false,
//     page: 1,
//     query: "",
//   };

//   totalResults = null;

//   async componentDidMount() {
//     try {
//       this.setState({ status: fetchStatus.Loading });
//       const { articles, totalResults } = await getArticles();
//       this.totalResults = totalResults;
//       this.setState({ articles, status: fetchStatus.Success });
//     } catch (error) {
//       this.setState({ status: fetchStatus.Error });
//     }
//   }

//   async componentDidUpdate(_, prevState) {
//     if (
//       this.state.query !== prevState.query ||
//       this.state.page !== prevState.page
//     ) {
//       const { query, page } = this.state;
//       try {
//         this.setState({ status: fetchStatus.Loading });
//         const { articles } = await getArticles(query, page);
//         this.setState((prevState) => ({
//           articles: page > 1 ? [...prevState.articles, ...articles] : articles,
//           status: fetchStatus.Success,
//         }));
//       } catch (error) {
//         this.setState({ status: fetchStatus.Error });
//       }
//     }
//   }

//   handleSearch = async (query) => {
//     this.setState({ query });
//   };

//   handleLoadMore = async () => {
//     this.setState((prevState) => ({ page: prevState.page + 1 }));
//   };

//   render() {
//     const { articles, status } = this.state;

//     if (status === fetchStatus.Loading) {
//       return <ArticlesLoader />;
//     }

//     if (status === fetchStatus.Error) {
//       return <ArticlesError />;
//     }

//     const limitPage = Math.ceil(this.totalResults / 9);

//     return (
//       <>
//         <ArticlesSearch onSubmitSearch={this.handleSearch} />
//         <div className="container-fluid g-0">
//           <div className="row">
//             {articles?.map((article) => (
//               <ArticlesItem key={article.url} article={article} />
//             ))}
//           </div>
//         </div>

//         <div className="pagination">
//           <div className="btn-group my-4 mx-auto btn-group-lg">
//             {this.state.page < limitPage && (
//               <Button onClick={this.handleLoadMore}>Load more</Button>
//             )}
//           </div>
//         </div>
//       </>
//     );
//   }
// }
