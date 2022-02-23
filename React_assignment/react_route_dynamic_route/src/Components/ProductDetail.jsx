import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import style from '../CssOfAllFile.module.css'

export const ProductDetail = () => {
    const [data,setData] = useState({})
    const params = useParams()

    const getData = ()=>{
       if(params.id){
        fetch(`http://localhost:3000/products/${params.id}`)
        .then(r=>r.json())
        .then(res=>{
          setData(res)
            console.log(res);
        })
       }
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div className={style.productDetails}>
      <div>{data.name}</div>
      <div>
        <img src={data.url} alt="iamge" />
      </div>
      <div>Price : Rs {data.price}</div>
      <button>Buy Now</button>
    </div>
  )
}
