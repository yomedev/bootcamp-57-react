import { useSelector } from "react-redux";
import { NotFoundProducts } from "./NotFoundProducts";
import { ProductItem } from "./ProductItem";
import { useMemo } from "react";

export const ProductsList = () => {
  const products = useSelector((state) => state.products.items);
  const search = useSelector((state) => state.products.search);
  const isInStock = useSelector((state) => state.products.isInStock);
  const category = useSelector((state) => state.products.category);

  const filteredProducts = useMemo(() => {
    let filteredProducts = [...products];
    filteredProducts = filteredProducts.filter(({ title }) =>
      title.toLowerCase().includes(search.toLowerCase().trim())
    );
    if (isInStock) {
      filteredProducts = filteredProducts.filter(({ stock }) => stock);
    }
    if (category !== "all") {
      filteredProducts = filteredProducts.filter(
        (item) => item.category === category
      );
    }
    return filteredProducts;
  }, [products, search, isInStock, category]);

  if (!products.length) {
    return <NotFoundProducts />;
  }

  return (
    <section className="h-100 h-custom">
      {filteredProducts.map((product) => (
        <ProductItem
          key={product.id}
          {...product}
        />
      ))}
    </section>
  );
};
