import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import { login, logout } from "../ReduxFile/auth/auth.action";

export const Navbar = () => {
    const dispatch = useDispatch()
  
  const isuserLogin = useSelector((state)=> state.auth.isuserLogin)
  console.log(isuserLogin);
  return (
    <div style={{display:"flex", fontSize:"20px",gap:"2rem"}}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <div>
          
      {isuserLogin ? (<button onClick={()=>dispatch(logout())}>Logout</button>) : (<button onClick={()=>dispatch(login())}>Login</button>)}
      </div>
    </div>
  );
};
