import ReactDOM from "react-dom/client";
import App from "./App";

// const paragraph = createElement("p", null, "Home")
// const link = createElement(
//   "a",
//   { href: "/", alt: "home" },
//   paragraph
// );
// console.log("createElement: ", link);

// const link = <a href="/" alt="home">Home</a>

// function Link({ href, alt, text }) {
//   return (
//     <a href={href} alt={alt}>
//       {text}
//     </a>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

// root.render(link({ alt: "home", text: "About", href: "/" }));

// const link2 = <a href="/" alt="home">Home</a>

// console.log("jsx: ", link2);

// { href: "/", alt: "home", children: 'Home' }
