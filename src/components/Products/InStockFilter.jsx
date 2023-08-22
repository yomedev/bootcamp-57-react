export const InStockFilter = ({ onChangeInStock, isChecked }) => {
  return (
    <fieldset className="me-5">
      <legend>Availability:</legend>

      <div className="form-check">
        <label className="form-check-label">
          <span>In stock</span>
          <input
            checked={isChecked}
            className="form-check-input"
            type="checkbox"
            onChange={onChangeInStock}
          />
        </label>
      </div>
    </fieldset>
  );
};
