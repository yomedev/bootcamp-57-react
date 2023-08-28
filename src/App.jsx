import { Layout } from "./components/Layout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// import Counter from "./components/Counter/Counter";
import { Articles } from "./components/Articles";
import { useState } from "react";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");

  const login = (name, password) => {
    if (password === "123") {
      setIsLogin(true);
      setUsername(name);
    }
  };

  const logout = () => {
    setIsLogin(false);
  };

  return (
    <>
      <AuthContext.Provider value={{ isLogin, username, login, logout }}>
        <Layout>
          <Articles />
          <ToastContainer />
        </Layout>
      </AuthContext.Provider>
    </>
  );
};

export default App;
