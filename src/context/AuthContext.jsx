import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");

  const login = (name, password) => {
    if (password === "123") {
      setIsLogin(true);
      setUsername(name);
    }
  };

  const logout = () => {
    setIsLogin(false);
    setUsername("");
  };

  return (
    <AuthContext.Provider value={{ isLogin, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
