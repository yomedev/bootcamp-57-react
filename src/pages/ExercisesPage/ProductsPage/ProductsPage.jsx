import { SearchInput } from "../../../components/Products/SearchInput";
import productsJson from "../../../data/products.json";
import { ProductsList } from "../../../components/Products/ProductsList";
import { Modal } from "../../../components/Modal/Modal";
import { Cart } from "../../../components/Cart/Cart";
import { FiPlus } from "react-icons/fi";
import { useRef } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductAction,
  changeSearchAction,
  removeProductAction,
  toggleModalAction,
} from "../../../redux/products/productsActions";

const PRODUCTS_LOCALSTORAGE_KEY = "products";

export const ProductsPage = () => {
  const products = useSelector((state) => state.products.items);
  const isModalOpen = useSelector((state) => state.products.isModalOpen);
  const search = useSelector((state) => state.products.search);

  const dispatch = useDispatch();

  const modalProduct = useRef(null);

  useEffect(() => {
    localStorage.setItem(PRODUCTS_LOCALSTORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const handleChangeSearch = (event) =>
    dispatch(changeSearchAction(event.target.value));

  const handleResetSearch = () => dispatch(changeSearchAction(""));

  const handleModalShow = (productId) => {
    dispatch(toggleModalAction());
    modalProduct.current = products.find(({ id }) => id === productId);
  };

  const handleModalClose = () => dispatch(toggleModalAction());

  const handleDeleteProduct = (productId) =>
    dispatch(removeProductAction(productId));

  const handleAddProduct = () => {
    const randomIndex = Math.floor(Math.random() * productsJson.length);
    dispatch(
      addProductAction({ ...productsJson[randomIndex], id: Date.now() })
    );
  };

  const filteredProducts = useMemo(() => {
    console.log("applyFilters");
    let filteredProducts = [...products];
    filteredProducts = filteredProducts.filter(({ title }) =>
      title.toLowerCase().includes(search.toLowerCase().trim())
    );
    return filteredProducts;
  }, [products, search]);

  return (
    <>
      <div className="d-flex align-items-center mb-5">
        <button
          type="button"
          className="btn btn-primary btn-lg ms-auto"
          onClick={handleAddProduct}
        >
          <FiPlus />
        </button>
      </div>

      <SearchInput
        search={search}
        onChangeSearch={handleChangeSearch}
        onResetSearch={handleResetSearch}
      />
      <ProductsList
        products={filteredProducts}
        onDeleteProduct={handleDeleteProduct}
        onModalShow={handleModalShow}
      />
      {isModalOpen && (
        <Modal onModalClose={handleModalClose}>
          <Cart {...modalProduct.current} defaultCounter={1} />
        </Modal>
      )}
    </>
  );
};
