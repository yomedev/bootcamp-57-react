import { Component } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

// let counter = 2;

export class Cart extends Component {
  state = {
    plus: 0,
    minus: 0,
    counter: this.props.stock > 0 ? this.props.defaultCounter : 0,
  };

  // componentDidMount() {
  //   console.log("componentDidMount");
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }

  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  // }

  handlePlus = () => {
    if (this.state.counter < this.props.stock) {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    } else {
      alert("There's no available products");
    }
  };

  handleMinus = () => {
    if (this.state.counter > 0)
    this.setState({ counter: 1, value: 4 });
  };

  handleUpdate = (event) => {
    console.log(event.currentTarget.name);
    const { name } = event.currentTarget;

    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };

  getTotal() {
    return this.state.counter * this.props.price;
  }

  render() {
    const { counter } = this.state;
    const { thumbnail, title, brand, price, stock } = this.props;
    console.log(stock);
    return (
      <section
        className="h-100 p-4 h-custom"
        style={{ backgroundColor: "#eee" }}
      >
        <h3 className="mb-4 pt-2 text-center fw-bold text-uppercase">
          Shoping cart
        </h3>

        <div className="d-flex align-items-center mb-4 shadow-lg p-2 rounded">
          <img
            src={thumbnail}
            className="img-fluid"
            style={{ width: "150px" }}
            alt="Generic placeholder"
          />

          <div className="ms-3">
            <h5 className="text-primary">{title}</h5>
            <h6 style={{ color: "#9e9e9e" }}>{brand}</h6>
            <p className="fw-bold mb-0 me-5 pe-3">{price}$</p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mb-4 gap-4">
          <button
            name="minus"
            onClick={this.handleUpdate}
            className="btn btn-outline-primary p-2 d-flex justify-content-center align-items-center"
          >
            <FaMinus fontSize={25} />
          </button>

          <h4>{counter}</h4>

          <button
            // disabled={this.props.stock === 0}
            name="plus"
            onClick={this.handlePlus}
            className="btn btn-outline-primary p-2 d-flex justify-content-center align-items-center"
          >
            <FaPlus fontSize={25} />
          </button>
        </div>
        <div
          className="d-flex justify-content-between p-2 mb-4"
          style={{ backgroundColor: "#e1f5fe" }}
        >
          <h5 className="fw-bold mb-0">Total:</h5>
          <h5 className="fw-bold mb-0">{this.getTotal()}$</h5>
        </div>
        <div className="w-full d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary mx-auto btn-block btn-lg"
          >
            Buy now
          </button>
        </div>
      </section>
    );
  }
}

// export const Cart = () => {
//   return (
//     <section className="h-100 p-4 h-custom" style={{ backgroundColor: "#eee" }}>
//       <h3 className="mb-4 pt-2 text-center fw-bold text-uppercase">
//         Shoping cart
//       </h3>

//       <div className="d-flex align-items-center mb-4 shadow-lg p-2 rounded">
//         <img
//           src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
//           className="img-fluid"
//           style={{ width: "150px" }}
//           alt="Generic placeholder"
//         />

//         <div className="ms-3">
//           <h5 className="text-primary">iPhone 9</h5>
//           <h6 style={{ color: "#9e9e9e" }}>Apple</h6>
//           <p className="fw-bold mb-0 me-5 pe-3">549$</p>
//         </div>
//       </div>
//       <div className="d-flex justify-content-center align-items-center mb-4 gap-4">
//         <button className="btn btn-outline-primary p-2 d-flex justify-content-center align-items-center">
//           <FaMinus fontSize={25} />
//         </button>

//         <h4>1</h4>

//         <button className="btn btn-outline-primary p-2 d-flex justify-content-center align-items-center">
//           <FaPlus fontSize={25} />
//         </button>
//       </div>
//       <div
//         className="d-flex justify-content-between p-2 mb-4"
//         style={{ backgroundColor: "#e1f5fe" }}
//       >
//         <h5 className="fw-bold mb-0">Total:</h5>
//         <h5 className="fw-bold mb-0">549$</h5>
//       </div>
//       <div className="w-full d-flex justify-content-center">
//         <button
//           type="button"
//           className="btn btn-primary mx-auto btn-block btn-lg"
//         >
//           Buy now
//         </button>
//       </div>
//     </section>
//   );
// };
