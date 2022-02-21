import { createContext, createRef, useEffect } from "react"
import { useState } from "react"
import style from "../CSS/Mens.module.css"


export const Mens = ({buyNow})=>{
  const [data,setData] = useState([])
  // const [buy,setBuyNow] = useState([])
  const handleBuy = (item)=>{
    buyNow(prev => [...prev,{...item,qty:1},])
  }
  
  const getData = ()=>{
    fetch("http://localhost:3000/Mens")
    .then(r => r.json())
    .then(mensData => {
      setData(mensData)
      console.log(mensData);
    })
  }
  useEffect(()=>{
    getData()
  },[])
  return(
    <div className={style.mens}>
      {
        data.map(item => {
          
          return(
            <div key={item.id}>
              <h2>{item.category}</h2>
              <img src={item.url} alt="image" />
              <h3>{item.type}</h3>
              <div>{item.price}</div>
              <button onClick={()=>handleBuy(item)}>Buy Now</button>
            </div>
            
          )
        })
      }
    </div>
  )
}