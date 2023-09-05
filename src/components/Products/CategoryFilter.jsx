import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../redux/products/productsSlice";

const categories = [
  { label: "All", value: "all" },
  { label: "Smartphones", value: "smartphones" },
  { label: "Laptops", value: "laptops" },
  { label: "Watches", value: "watches" },
];

export const CategoryFilter = () => {
  const category = useSelector((state) => state.products.category);
  const dispatch = useDispatch();
  return (
    <fieldset className="ms-5">
      <legend>Categories:</legend>

      <div className="d-flex">
        {categories.map(({ label, value }) => (
          <div key={value} className="form-check me-4">
            <label className="form-check-label">
              <span>{label}</span>
              <input
                checked={value === category}
                value={value}
                onChange={(event) =>
                  dispatch(changeCategory(event.target.value))
                }
                className="form-check-input"
                type="radio"
                name="skil"
              />
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
