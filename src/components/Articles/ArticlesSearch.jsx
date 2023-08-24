import { Component } from "react";

import { Button } from "../Button";

export class ArticlesSearch extends Component {
  state = {
    search: "",
  };

  handleChangeSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  handleSubmitSearch = () => {
    this.props.onSubmitSearch(this.state.search)
  }

  render() {
    const {search} = this.state
    return (
      <div className="input-group mb-3">
        <input
          value={search}
          onChange={this.handleChangeSearch}
          type="text"
          className="form-control"
          placeholder="Type to search..."
        />
        <Button onClick={this.handleSubmitSearch} >Search</Button>
      </div>
    );
  }
}
