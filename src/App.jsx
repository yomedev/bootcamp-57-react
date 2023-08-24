import { Layout } from "./components/Layout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Articles } from "./components/Articles";

const App = () => {
  return (
    <Layout>
      <Articles />
      <ToastContainer />
    </Layout>
  );
};

export default App;
