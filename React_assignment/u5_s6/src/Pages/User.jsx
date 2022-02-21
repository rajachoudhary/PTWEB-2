import React from 'react'
import { Link } from 'react-router-dom'
import style from "../CSS/LoginForm.module.css"
export const User = () => {
  return (
    <div>
        <div className={style.loginFormContainer} style={{backgroundColor:"green"}}>
        <form>
            <div className={style.userLoginform}>
                <label>First Name</label>
                <input type="text" placeholder='First Name' />
            </div>
            <div className={style.userLoginform}>
                <label>Last Name</label>
                <input type="text" placeholder='Last Name' />
            </div>

            <div  className={style.userLoginform}>
                <label>Contact no.</label>
                <input type="text" placeholder='Contact Number' />
            </div>
            <div  className={style.userLoginform}>
                <label>Email</label>
                <input type="Eamil" placeholder='Eamil' />
            </div>
            <div  className={style.userLoginform}>
                <label>Password</label>
                <input type="password" placeholder='Password' />
            </div>
           
            <Link to="/"><button className={style.loginformButton}>Login</button></Link>
        </form>
    </div>
    </div>
  )
}
