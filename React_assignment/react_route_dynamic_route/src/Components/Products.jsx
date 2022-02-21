import React, { useEffect, useState } from 'react'
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import { ProductDetail } from './ProductDetail'

export const Products = () => {
  const [data,setData] = useState([])
  const navigate = useNavigate()
  const handleDetails = (id)=>{
    navigate(`/products/${id}`)
    
  }
  const getData = ()=>{
    fetch(`http://localhost:3000/Products`)
    .then(r => r.json())
    .then(res => {
      setData(res)
      console.log(res);
    })
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
    <Routes>
      <Route path="/" element={
        <div>
          {data.map((item)=>{
          return(
          <div key={item.id}>
            <div>{item.name}</div>
            <div>
            <img src={item.url} alt='image'/>
            </div>
            <button onClick={()=>handleDetails(item.id)}>More Details</button>
          </div>

          )
        })}
        </div>
       }/> 
      <Route path=":id" element={<ProductDetail/>}/>
    </Routes>
    </div>
  )
}
