export const SearchInput = ({search, onChangeSearch, onResetSearch}) => {
  return (
    <div className="input-group input-group-lg mb-5">
      <input value={search} onChange={onChangeSearch} type="text" className="form-control" placeholder="Type to search ..." />
      <button onClick={onResetSearch} className="btn btn-outline-secondary" type="button">
        Reset
      </button>
    </div>
  );
};