const Link = ({ href, alt, text }) => {
  return (
    <a href={href} alt={alt}>
      {text}
    </a>
  );
};

export default Link;
