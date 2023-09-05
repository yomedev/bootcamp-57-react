import { PropTypes } from "prop-types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/products/productsSlice";

export const Modal = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        dispatch(toggleModal());
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch]);

  const handleBackdropClose = (event) => {
    if (event.target === event.currentTarget) {
      dispatch(toggleModal());
    }
  };

  return (
    <>
      <div className="modal-backdrop fade show" />

      <div
        className="modal fade show"
        style={{ display: "block" }}
        onClick={handleBackdropClose}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => dispatch(toggleModal())}
              />
            </div>

            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propType = {
  children: PropTypes.node.isRequired,
};
