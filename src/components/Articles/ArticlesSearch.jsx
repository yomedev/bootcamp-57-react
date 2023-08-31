import { Button } from "../Button";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const ArticlesSearch = () => {
  const [search, setSearch] = useState("");
  const [, setSearchParams] = useSearchParams();

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmitSearch = () => {
    setSearchParams({ query: search, page: 1 });
  };

  return (
    <div className="input-group mb-3">
      <input
        value={search}
        onChange={handleChangeSearch}
        type="text"
        className="form-control"
        placeholder="Type to search..."
      />
      <Button onClick={handleSubmitSearch}>Search</Button>
    </div>
  );
};

// export class ArticlesSearch extends Component {
//   state = {
//     search: "",
//   };

//   handleChangeSearch = (event) => {
//     this.setState({ search: event.target.value });
//   };

//   handleSubmitSearch = () => {

//   }

//   render() {
//     const {search} = this.state
//     return (
//       <div className="input-group mb-3">
//         <input
//           value={search}
//           onChange={this.handleChangeSearch}
//           type="text"
//           className="form-control"
//           placeholder="Type to search..."
//         />
//         <Button onClick={this.handleSubmitSearch} >Search</Button>
//       </div>
//     );
//   }
// }
