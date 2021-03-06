import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DECREMENT, INCREMENT } from '../ReduxFile/counter/counter.actionTypes'


export const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.counter.count)
    console.log(count)
  return (
    <div>
        <div>{count}</div>
        <button  onClick={() => {
          dispatch({
            type: INCREMENT,
          });
        }}>Increment</button>
        <button onClick={() => {
          dispatch({
            type: DECREMENT,
          });
        }}>Decrement</button>
    </div>
  )
}
