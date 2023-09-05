import { useDispatch, useSelector } from "react-redux";
import { changeIsInStock } from "../../redux/products/productsSlice";

export const InStockFilter = () => {
  const isInStock = useSelector((state) => state.products.isInStock);
  const dispatch = useDispatch()
  return (
    <fieldset className="me-5">
      <legend>Availability:</legend>

      <div className="form-check">
        <label className="form-check-label">
          <span>In stock</span>
          <input
            checked={isInStock}
            className="form-check-input"
            type="checkbox"
            onChange={() => dispatch(changeIsInStock())}
          />
        </label>
      </div>
    </fieldset>
  );
};
