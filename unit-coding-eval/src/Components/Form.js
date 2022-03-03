import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { login, logout } from '../ReduxFile/auth/auth.action'

export const Form = () => {
    const [username,setusername]= useState("")
    const [password,setpassword]= useState("")
    const [state,setState] = useState([])

    const dispatch = useDispatch()
  
  const isuserLogin = useSelector((state)=> state.auth.isuserLogin)
  
    const getRequest = ()=>{
        fetch("http://localhost:3000/users")
        .then(res=>res.json())
        .then((res)=>{
            setState(res)
        })
    }
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()  
        state.map((item)=>{
            if(item.username === username && item.password === password){
               dispatch(logout(item.username))
            
            } else {
                alert("wrong")
                dispatch(login())
                
            }
        })    
    }
    useEffect(()=>{
        getRequest()
    },[])
   
  return (
    <div>
        <form >
            <div style={{display:"flex", justifyContent:"space-between",gap:"3rem",width:"30%"}}>
                <label>User Name</label>
                <input type="text" placeholder="UserName" value={username} onChange={(e)=>setusername(e.currentTarget.value)}/>
            </div>
            <div style={{display:"flex", justifyContent:"space-between",gap:"3rem",width:"30%"}}>
                <label>Password</label>
                <input type="text" placeholder="Password" value={password} onChange={(e)=>setpassword(e.currentTarget.value)}/>
            </div>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}
