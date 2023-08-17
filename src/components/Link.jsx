const Link = ({ href, alt, text }) => {
  return (
    <a href={href} alt={alt}>
      {text}
    </a>
  );
};

export default Link;

function sum(a, b) {
  return a + b
}

sum(2, 4)
