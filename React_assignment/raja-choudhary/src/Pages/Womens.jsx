import { useEffect } from "react"
import { useState } from "react"
import style from "../CSS/Womens.module.css"

export const Womens = ()=>{
  const [data,setData] = useState([])
  const getData = ()=>{
    fetch("http://localhost:3000/Womens")
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
    <div className={style.womens}>
      {
        data.map(item => {
          return(
            <div key={item.id}>
              <h2>{item.category}</h2>
              <img src={item.url} alt="image" />
              <h3>{item.type}</h3>
              <div>{item.price}</div>
              <button>Buy Now</button>
            </div>
            
          )
        })
      }
    </div>
  )
}