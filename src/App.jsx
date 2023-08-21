import { Component } from "react";
import { Cart } from "./components/Cart";
import { Header, Layout } from "./components/Layout";
import { Modal } from "./components/Modal";
import { ProductsList } from "./components/Products/ProductsList";

export default class App extends Component {
  state = {
    isModalShow: false,
  };

  handleModalShow = () => {
    this.setState({ isModalShow: true });
  };

  handleModalClose = () => {
    this.setState({ isModalShow: false });
  };

  render() {
    const { isModalShow } = this.state;
    return (
      <Layout>
        <Header>Hello world</Header>
        {isModalShow && (
          <Modal onModalClose={this.handleModalClose}>
            <Cart defaultCounter={4} />
          </Modal>
        )}
        <ProductsList onModalShow={this.handleModalShow} />
      </Layout>
    );
  }
}



// const App = () => {

//   const handleModalShow = () => {
//     isModalShow = true
//   }

//   return (
//     <Layout>
//       <Header>Hello world</Header>
//       {isModalShow && <Modal><Cart defaultCounter={4} /></Modal>}
//       <ProductsList />
//     </Layout>
//   );
// };

// export default App;
