import React from 'react'
import { useSelector } from 'react-redux'

export const Home = () => {
    const username = useSelector((state)=>state.username)
    console.log(username)
  return (
    <div>
      Home
    </div>
  )
}
