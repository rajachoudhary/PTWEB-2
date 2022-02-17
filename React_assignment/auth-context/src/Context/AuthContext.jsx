import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);
  const [form, setForm] = useState(false);
  const handleAuth = () => {
    setForm(true);
  };
  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, handleAuth, form, setForm }}
    >
      {children}
    </AuthContext.Provider>
  );
};
