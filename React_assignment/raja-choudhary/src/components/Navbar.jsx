import { Link } from "react-router-dom"
import style from "../CSS/Navbar.module.css"
export const Navbar = ()=>{
  return(
    <div>
      <div className={style.navbar}>
        <Link to="/">Home</Link>
        <Link to="/mens">Mens</Link>
        <Link to="/children">Children</Link>
        <Link to="/womens">Womens</Link>
        <Link to="/faq">Faq</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/contactus">Contact Us</Link>
        <Link to="/cart"><img style={{height:"30px",}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzWGRwv4yp47FJzHda_QYFvkoulTG3Uqfmkg&usqp=CAU" alt="cart image"/></Link>
        
      </div>
    </div>
  )
}