import { Header, Layout } from "./components/Layout";
// import { LoginForm } from "./components/LoginForm";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Products } from "./components/Products/Products";

const App = () => {
  return (
    <Layout>
      <Header>Hello world</Header>
      {/* <LoginForm /> */}
      <Products />
      <ToastContainer />
    </Layout>
  );
};

export default App;
