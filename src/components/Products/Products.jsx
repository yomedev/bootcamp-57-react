import { InStockFilter } from "./InStockFilter";
import { SearchInput } from "./SearchInput";
import { CategoryFilter } from "./CategoryFilter";
import { Component } from "react";
import productsJson from "../../data/products.json";
import { ProductsList } from "./ProductsList";
import { Modal } from "../Modal/Modal";
import { Cart } from "../Cart/Cart";
import { FiPlus } from "react-icons/fi";

const PRODUCTS_LOCALSTORAGE_KEY = "products";

export class Products extends Component {
  state = {
    products: [],
    isModalShow: false,
    isInStock: false,
    category: "",
    search: "",
  };

  modalProduct = null;

  componentDidMount() {
    const localData = JSON.parse(
      localStorage.getItem(PRODUCTS_LOCALSTORAGE_KEY)
    );
    if (localData || localData?.length) {
      this.setState({ products: localData });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.products.length !== this.state.products.length) {
      localStorage.setItem(
        PRODUCTS_LOCALSTORAGE_KEY,
        JSON.stringify(this.state.products)
      );
    }
  }

  handleChangeSearch = (event) => {
    const { value } = event.target;
    this.setState({ search: value });
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

  handleModalShow = (productId) => {
    this.setState({ isModalShow: true });
    this.modalProduct = this.state.products.find(({ id }) => id === productId);
  };

  handleModalClose = () => {
    this.setState({ isModalShow: false });
  };

  handleDeleteProduct = (productId) => {
    this.setState((prevState) => ({
      products: prevState.products.filter(({ id }) => id !== productId),
    }));
  };

  handleAddProduct = () => {
    const randomIndex = Math.floor(Math.random() * productsJson.length);
    this.setState((prevState) => ({
      products: [
        { ...productsJson[randomIndex], id: Date.now() },
        ...prevState.products,
      ],
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
          <button
            type="button"
            className="btn btn-primary btn-lg ms-auto"
            onClick={this.handleAddProduct}
          >
            <FiPlus />
          </button>
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
            <Cart {...this.modalProduct} defaultCounter={1} />
          </Modal>
        )}
      </>
    );
  }
}
