import styles from "./Button.module.css";
import clsx from "clsx";

// const person = {
//   name: "Bob",
// };

// const key = "name";

// const person2 = {
//   [key]: "Bob",
// };

const Button = ({ primary, alert, success, children }) => {
  // const classNames = [styles.btn]

  // if (primary) {
  //   classNames.push(styles.primary)
  // }
  // if (alert) {
  //   classNames.push(styles.alert)
  // }

  return (
    <button
      className={clsx(
        styles.btn,
        {
          [styles.primary]: primary,
          [styles.alert]: alert,
        }
        // primary && styles.primary,
        // alert && styles.alert
      )}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
