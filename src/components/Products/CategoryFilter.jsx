export const CategoryFilter = ({ category, onChangeCategory }) => {
  return (
    <fieldset className="ms-5">
      <legend>Categories:</legend>

      <div className="d-flex">
        <div className="form-check me-4">
          <label className="form-check-label">
            <span>Smartphones</span>
            <input
              checked={"smartphones" === category}
              value={"smartphones"}
              onChange={onChangeCategory}
              className="form-check-input"
              type="radio"
              name="skil"
            />
          </label>
        </div>

        <div className="form-check me-4">
          <label className="form-check-label">
            <span>Laptops</span>
            <input
              checked={"laptops" === category}
              value={"laptops"}
              onChange={onChangeCategory}
              className="form-check-input"
              type="radio"
              name="skil"
            />
          </label>
        </div>

        <div className="form-check me-4">
          <label className="form-check-label">
            <span>Watches</span>
            <input
              checked={"watches" === category}
              value={"watches"}
              onChange={onChangeCategory}
              className="form-check-input"
              type="radio"
              name="skil"
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
};
