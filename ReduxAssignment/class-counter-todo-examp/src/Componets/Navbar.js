import React, { useEffect } from "react";
import {NavLink} from 'react-router-dom'
export const Navbar = () => {
  const [isUserLogedIn, setIsUserLogedIn] = useEffect(false);
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      {isUserLogedIn ? <button>Logout</button> : <button>Login</button>}
    </div>
  );
};
