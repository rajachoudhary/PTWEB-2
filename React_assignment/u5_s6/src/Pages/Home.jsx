import React from 'react'
import style from "../CSS/LoginForm.module.css"
export const Home = () => {
  return (
    <div className={style.loginFormContainer}>
        <form>
            <div className={style.userLoginform}>
                <label>Name</label>
                <input type="text" placeholder='Name' />
            </div>
            <div  className={style.userLoginform}>
                <label>Password</label>
                <input type="password" placeholder='Password' />
            </div>
            <button className={style.loginformButton}>Login</button>
        </form>
    </div>
  )
}
