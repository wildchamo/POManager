import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

const POContext = React.createContext();

function POProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [unidad, setUnidad] = React.useState(null);

  const navigate = useNavigate();

  const login = (username, unidad) => {
    setUser(username);
    setUnidad(unidad);
    navigate("/dashboard");
  };
  const logout = () => {
    setUser(null);
    setUnidad(null);
    navigate("/");
  };

  const auth = { user, login, logout };
  return <POContext.Provider value={auth}>{children}</POContext.Provider>;
}

function useAuth() {
  const auth = useContext(POContext);
  return auth;
}

export { POProvider, useAuth };
