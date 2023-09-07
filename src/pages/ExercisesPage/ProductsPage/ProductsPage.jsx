import { InStockFilter } from "../../../components/Products/InStockFilter";
import { SearchInput } from "../../../components/Products/SearchInput";
import { CategoryFilter } from "../../../components/Products/CategoryFilter";
import productsJson from "../../../data/products.json";
import { ProductsList } from "../../../components/Products/ProductsList";
import { Modal } from "../../../components/Modal/Modal";
import { Cart } from "../../../components/Cart/Cart";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../redux/products/productsSlice";
import { selectIsModalOpen } from "../../../redux/products/productsSelectors";

export const ProductsPage = () => {

  const isModalOpen = useSelector(selectIsModalOpen);
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    const randomIndex = Math.floor(Math.random() * productsJson.length);
    dispatch(addProduct(productsJson[randomIndex]));
  };

  return (
    <>
      
      <div className="d-flex align-items-center mb-5">
        <InStockFilter />
        <CategoryFilter />
        <button
          type="button"
          className="btn btn-primary btn-lg ms-auto"
          onClick={handleAddProduct}
        >
          <FiPlus />
        </button>
      </div>

      <SearchInput />
      <ProductsList />
      {isModalOpen && (
        <Modal>
          <Cart />
        </Modal>
      )}
    </>
  );
};
