import Link from "./components/Link";

const App = () => {
  return (
    <>
      <Link alt="home" href="/" text="Home" />
      <br />
      <Link alt="about" href="/about" text="About" />
    </>
  );
};

// Link({ alt: "home", href: "/", tetx: "Home" });
export default App;
