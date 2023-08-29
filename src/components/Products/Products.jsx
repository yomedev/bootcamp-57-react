import { InStockFilter } from "./InStockFilter";
import { SearchInput } from "./SearchInput";
import { CategoryFilter } from "./CategoryFilter";
import productsJson from "../../data/products.json";
import { ProductsList } from "./ProductsList";
import { Modal } from "../Modal/Modal";
import { Cart } from "../Cart/Cart";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { getLocalData } from "../../helpers/getLocalData";
import { useMemo } from "react";

const PRODUCTS_LOCALSTORAGE_KEY = "products";

export const Products = () => {
  const [products, setProducts] = useState(() =>
    getLocalData(PRODUCTS_LOCALSTORAGE_KEY, undefined, productsJson)
  );
  const [isModalShow, setIsModalShow] = useState(false);
  const [isInStock, setIsInStock] = useState(false);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  const modalProduct = useRef(null);

  useEffect(() => {
    localStorage.setItem(PRODUCTS_LOCALSTORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const handleChangeSearch = (event) => setSearch(event.target.value);

  const handleResetSearch = () => setSearch("");

  const handleChangeCategory = (event) => setCategory(event.target.value);

  const handleChangeInStock = () => setIsInStock((prev) => !prev);

  const handleModalShow = (productId) => {
    setIsModalShow(true);
    modalProduct.current = products.find(({ id }) => id === productId);
  };

  const handleModalClose = () => setIsModalShow(false);

  const handleDeleteProduct = (productId) =>
    setProducts((prev) => prev.filter(({ id }) => id !== productId));

  const handleAddProduct = () => {
    const randomIndex = Math.floor(Math.random() * productsJson.length);
    setProducts((prev) => [
      { ...productsJson[randomIndex], id: Date.now() },
      ...prev,
    ]);
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
        <InStockFilter
          isChecked={isInStock}
          onChangeInStock={handleChangeInStock}
        />
        <CategoryFilter
          category={category}
          onChangeCategory={handleChangeCategory}
        />
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
      {isModalShow && (
        <Modal onModalClose={handleModalClose}>
          <Cart {...modalProduct.current} defaultCounter={1} />
        </Modal>
      )}
    </>
  );
};

// export class Products extends Component {
//   state = {
//     products: [],
//     isModalShow: false,
//     isInStock: false,
//     category: "",
//     search: "",
//   };

//   modalProduct = null;

//   componentDidMount() {
//     const localData = JSON.parse(
//       localStorage.getItem(PRODUCTS_LOCALSTORAGE_KEY)
//     );
//     if (localData || localData?.length) {
//       this.setState({ products: localData });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.products.length !== this.state.products.length) {
//       localStorage.setItem(
//         PRODUCTS_LOCALSTORAGE_KEY,
//         JSON.stringify(this.state.products)
//       );
//     }
//   }

//    = (event) => {
//     const { value } = event.target;
//     this.setState({ search: value });
//   };

//   handleResetSearch = () => {
//     this.setState({ search: "" });
//   };

//   handleChangeCategory = (event) => {
//     const { value } = event.target;
//     this.setState({ category: value });
//   };

//   handleChangeInStock = () => {
//     this.setState((prevState) => ({ isInStock: !prevState.isInStock }));
//   };

//   handleModalShow = (productId) => {
//     this.setState({ isModalShow: true });
//     this.modalProduct = this.state.products.find(({ id }) => id === productId);
//   };

//   handleModalClose = () => {
//     this.setState({ isModalShow: false });
//   };

//   handleDeleteProduct = (productId) => {
//     this.setState((prevState) => ({
//       products: prevState.products.filter(({ id }) => id !== productId),
//     }));
//   };

//   handleAddProduct = () => {
//     const randomIndex = Math.floor(Math.random() * productsJson.length);
//     this.setState((prevState) => ({
//       products: [
//         { ...productsJson[randomIndex], id: Date.now() },
//         ...prevState.products,
//       ],
//     }));
//   };

//   applyFilters = () => {
//     const { products, search, isInStock } = this.state;
//     let filteredProducts = [...products];
//     filteredProducts = filteredProducts.filter(({ title }) =>
//       title.toLowerCase().includes(search.toLowerCase().trim())
//     );
//     if (isInStock) {
//       filteredProducts = filteredProducts.filter(({ stock }) => stock !== 0);
//     }
//     return filteredProducts;
//   };

//   render() {
//     const { isModalShow, isInStock, category, search } = this.state;

//     const filteredProducts = this.applyFilters();
//     return (
//       <>
//         <div className="d-flex align-items-center mb-5">
//           <InStockFilter
//             isChecked={isInStock}
//             onChangeInStock={this.handleChangeInStock}
//           />
//           <CategoryFilter
//             category={category}
//             onChangeCategory={this.handleChangeCategory}
//           />
//           <button
//             type="button"
//             className="btn btn-primary btn-lg ms-auto"
//             onClick={this.handleAddProduct}
//           >
//             <FiPlus />
//           </button>
//         </div>

//         <SearchInput
//           search={search}
//           onChangeSearch={this.}
//           onResetSearch={this.handleResetSearch}
//         />
//         <ProductsList
//           products={filteredProducts}
//           onDeleteProduct={this.handleDeleteProduct}
//           onModalShow={this.handleModalShow}
//         />
//         {isModalShow && (
//           <Modal onModalClose={this.handleModalClose}>
//             <Cart {...this.modalProduct} defaultCounter={1} />
//           </Modal>
//         )}
//       </>
//     );
//   }
// }
