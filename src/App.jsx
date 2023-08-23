import { Header, Layout } from "./components/Layout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Products } from "./components/Products/Products";
import { Timer } from "./components/Timer/Timer";
import { Rerender } from "./components/Rerender/Rerender";

const App = () => {
  return (
    <Layout>
      <Rerender />
      <Timer />
      <Header>Hello world</Header>
      <Products />
      <ToastContainer />
    </Layout>
  );
};

export default App;
