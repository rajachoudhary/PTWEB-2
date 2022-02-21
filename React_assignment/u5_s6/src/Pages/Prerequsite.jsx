import React from 'react'
import { Link } from 'react-router-dom'
import style from '../CSS/PrerequsiteForm.module..css'
export const Prerequsite = () => {

  return (
    <div className={style.prerequsiteForm} style={{width:"500px",margin:"auto", fontSize:"20px" ,marginTop:"50px", backgroundColor:"blueviolet",borderRadius:"50px"}}>
        <form>
            <div style={{padding:"10px",width:"350px",margin:"auto"}}>
                <input type="checkbox" id="scales" name="scales" />          
                <label for="scales" >Can You attend 90% of the classes</label>
            </div>
            <div style={{padding:"10px",width:"350px",margin:"auto"}}>
                <input type="checkbox" id="horns" name="horns" />
                <label for="horns">Do you have Laptop</label>
            </div>
            <Link to="/user"><button style={{marginLeft:"70px",marginTop:"20px",marginLeft:"200px",marginBottom:"30px",backgroundColor:"green",fontSize:"20px",borderRadius:"20px"}}>Continue</button></Link>
        </form>
    </div>
  )
}
