import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/ContextProvider";
import style from "../PrivateRoute.module.css";

export const Navbar = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <div className={style.navbar}>
      <Link to="/">Home</Link>
      <div>
        {isAuth ? (
          <Link to="login/signout">Login</Link>
        ) : (
          <Link to="login/signin">Login</Link>
        )}
      </div>

      <div>
        {isAuth ? (
          <Link to="dashboard">Dashboard</Link>
        ) : (
          <Link to="login/signin">Dashboard</Link>
        )}
      </div>
    </div>
  );
};
