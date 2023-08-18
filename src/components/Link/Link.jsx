import styles from "./Link.module.css";

console.log("Link: ", styles);

const Link = ({ href, alt, text }) => {
  return (
    <div className={`${styles.link} ${styles.btn}`}>
      <a href={href} alt={alt}>
        {text}
      </a>
    </div>
  );
};

export default Link;

function sum(a, b) {
  return a + b;
}

sum(2, 4);
