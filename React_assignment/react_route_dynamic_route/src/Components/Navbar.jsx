import React from 'react'
import { Link } from 'react-router-dom'
import style from '../CssOfAllFile.module.css'

export const Navbar = () => {
  return (
    <div className={style.navbar}>
        <Link to="/" style={{color:"white",textDecoration:"none"}}>Home</Link>
        <Link to="/products" style={{color:"white",textDecoration:"none"}}>Product</Link>
    </div>
  )
}
