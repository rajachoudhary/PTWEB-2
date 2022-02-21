import { useEffect } from "react"
import { useState } from "react"
import style from "../CSS/Children.module.css"

export const Children = ()=>{
  const [data,setData] = useState([])

  const getData = ()=>{
    fetch("http://localhost:3000/Children")
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
    <div className={style.childrens}>
      {
        data.map(item => {
          return(
            <div key={item.id}>
              <h2>{item.category}</h2>
              <img src={item.url} alt="image" />
              <h3>{item.type}</h3>
              <div>{item.price}</div>
              <button >Buy Now</button>
            </div>
            
          )
        })
      }
    </div>
  )
}