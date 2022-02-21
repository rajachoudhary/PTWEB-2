import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const handleSignout = () => {
    setIsAuth(false);
  };

  const handleSignin = () => {
    setIsAuth(true);
  };

  const value = { isAuth, handleSignin, handleSignout };

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
};