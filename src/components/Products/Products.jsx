import { InStockFilter } from "./InStockFilter";
import { SearchInput } from "./SearchInput";
import { CategoryFilter } from "./CategoryFilter";
import { Component } from "react";
import productsJson from "../../data/products.json";
import { ProductsList } from "./ProductsList";
import { Modal } from "../Modal/Modal";
import { Cart } from "../Cart/Cart";

export class Products extends Component {
  state = {
    products: productsJson,
    isModalShow: false,
    isInStock: false,
    category: "",
    search: "",

    // filters: {
    //   isInStock: false,
    //   category: "",
    //   search: "",
    // },
  };

  handleChangeSearch = (event) => {
    const { value } = event.target;
    this.setState({ search: value });
    // this.setState((prevState) => ({
    //   filters: { ...prevState.filters, search: value },
    // }));
  };

  handleResetSearch = () => {
    this.setState({ search: "" });
  };

  handleChangeCategory = (event) => {
    const { value } = event.target;
    this.setState({ category: value });
  };

  handleChangeInStock = () => {
    this.setState((prevState) => ({ isInStock: !prevState.isInStock }));
  };

  handleModalShow = () => {
    this.setState({ isModalShow: true });
  };

  handleModalClose = () => {
    this.setState({ isModalShow: false });
  };

  handleDeleteProduct = (productId) => {
    this.setState((prevState) => ({
      products: prevState.products.filter(({ id }) => id !== productId),
    }));
  };

  applyFilters = () => {
    const { products, search, isInStock } = this.state;
    let filteredProducts = [...products];
    filteredProducts = filteredProducts.filter(({ title }) =>
      title.toLowerCase().includes(search.toLowerCase().trim())
    );
    if (isInStock) {
      filteredProducts = filteredProducts.filter(({ stock }) => stock !== 0);
    }
    return filteredProducts;
  };

  render() {
    const { isModalShow, isInStock, category, search } = this.state;

    const filteredProducts = this.applyFilters();
    return (
      <>
        <div className="d-flex align-items-center mb-5">
          <InStockFilter
            isChecked={isInStock}
            onChangeInStock={this.handleChangeInStock}
          />
          <CategoryFilter
            category={category}
            onChangeCategory={this.handleChangeCategory}
          />
        </div>

        <SearchInput
          search={search}
          onChangeSearch={this.handleChangeSearch}
          onResetSearch={this.handleResetSearch}
        />
        <ProductsList
          products={filteredProducts}
          onDeleteProduct={this.handleDeleteProduct}
          onModalShow={this.handleModalShow}
        />
        {isModalShow && (
          <Modal onModalClose={this.handleModalClose}>
            <Cart defaultCounter={4} />
          </Modal>
        )}
      </>
    );
  }
}
