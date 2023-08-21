import { ProductItem } from "./ProductItem";
import productsJson from "../../data/products.json";
import { Component } from "react";

export class ProductsList extends Component {
  state = {
    products: productsJson,
  };

  handleDeleteProduct = (productId) => {
    this.setState((prevState) => ({
      products: prevState.products.filter(({ id }) => id !== productId),
    }));
  };

  render() {
    const { products } = this.state;
    return (
      <section className="h-100 h-custom">
        {products.map((product) => (
          <ProductItem
            onDeleteProduct={this.handleDeleteProduct}
            onModalShow={this.props.onModalShow}
            key={product.id}
            {...product}
          />
        ))}
      </section>
    );
  }
}

// export const ProductsList = ({onModalShow}) => {
//   return (
//     <section className="h-100 h-custom">
//       {productsJson.map((product) => (
//         <ProductItem onModalShow={onModalShow} key={product.id} {...product} />
//       ))}
//     </section>
//   );
// };
