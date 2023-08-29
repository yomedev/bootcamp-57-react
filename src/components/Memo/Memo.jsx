const cache = {
  // "{ a: 2, b: 2}": 4,
  // "{ a: 3, b: 2}": 5
}

const sum = (a, b) => {
  const key = JSON.stringify({ a, b})
  // "{ a: 3, b: 2}"
  if (cache[key]) {
    console.log('from cache: ', cache[key]);
    return cache[key]
  }
  const result = a + b;
  console.log('calculated: ', result);
  cache[key] = result
  return result;
};

const Memo = () => {
  return (
    <>
      <button
        onClick={() => sum(2, 2)}
        type="button"
        className="btn btn-primary"
      >
        2 + 2
      </button>
      <button
        onClick={() => sum(2, 3)}
        type="button"
        className="btn btn-primary"
      >
        2 + 3
      </button>
      <button
        onClick={() => sum(2, 4)}
        type="button"
        className="btn btn-primary"
      >
        2 + 4
      </button>
    </>
  );
};

export default Memo;
