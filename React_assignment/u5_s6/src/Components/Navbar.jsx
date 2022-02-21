import React from 'react'
import { Link } from 'react-router-dom'
import style from '../CSS/Navbar.module.css'
export const Navbar = () => {
  return (
    <div className={style.navbar}>
        <Link to="/">HOME</Link>
        <Link to="prerequsite"><button style={{fontSize:"20px",backgroundColor:" red",borderRadius:"10px"}}>SignUp</button></Link>
    </div>
  )
}
