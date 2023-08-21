import { FaTrash } from "react-icons/fa6";

export const ProductItem = ({ id, title, price, stock, brand, thumbnail, onModalShow, onDeleteProduct }) => {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div>
              <img
                src={thumbnail}
                className="img-fluid rounded-3"
                alt="Shopping item"
                style={{ width: "150px", height: "100px", aspectRatio: "auto" }}
              />
            </div>
            <div className="ms-3">
              <h5>{title}</h5>
              <p className="small mb-0">{brand}</p>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center">
            <div style={{ width: "50px" }}>
              <h5 className="fw-normal mb-0">{stock}</h5>
            </div>
            <div style={{ width: "80px" }}>
              <h5 className="mb-0">${price}</h5>
            </div>
            <button onClick={onModalShow} type="button" className="btn btn-primary btn-lg me-4">
              Add to cart
            </button>
            <button
            onClick={() => onDeleteProduct(id)}
              type="button"
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <FaTrash color="red" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
