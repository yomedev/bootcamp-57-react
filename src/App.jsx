import { Layout } from "./components/Layout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Articles } from "./components/Articles";
import { AuthProvider } from "./context/AuthContext";
// import { Products } from "./components/Products/Products";
// import { Rerender } from "./components/Rerender/Rerender";
// import Memo from "./components/Memo/Memo";

const App = () => {
  return (
    <AuthProvider>
      <Layout>
        {/* <Rerender /> */}
        {/* <Products /> */}
        {/* <Memo /> */}
        <Articles />
        <ToastContainer />
      </Layout>
    </AuthProvider>
  );
};

export default App;
