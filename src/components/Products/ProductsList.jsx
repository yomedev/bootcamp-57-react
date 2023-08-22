import { ProductItem } from "./ProductItem";

export const ProductsList = ({ products, onModalShow, onDeleteProduct }) => {
  return (
    <section className="h-100 h-custom">
      {products.map((product) => (
        <ProductItem
          onDeleteProduct={onDeleteProduct}
          onModalShow={onModalShow}
          key={product.id}
          {...product}
        />
      ))}
    </section>
  );
};
