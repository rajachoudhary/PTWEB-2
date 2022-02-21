import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
    const [data,detData] = useState({})
    const params = useParams()

    const getData = ()=>{
       if(params.id){
        fetch(`http://localhost:3000/Products/${params.id}`)
        .then(r=>r.json())
        .then(res=>{
            console.log(res);
        })
       }
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>ProductDetail</div>
  )
}
