import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import styled from "../CSS/Navbar.module.css";

export const NavbarButton = () => {
  const { isAuth, setIsAuth, handleAuth } = useContext(AuthContext);
  const handleSignOut = () => {
    setIsAuth(true);
  };
  return (
    <div className={styled.navbar}>
      {isAuth ? (
        <button onClick={handleAuth}>SignIn</button>
      ) : (
        <button onClick={handleSignOut}>SignOut</button>
      )}
    </div>
  );
};
