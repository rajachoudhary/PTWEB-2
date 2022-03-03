import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddTodo } from '../ReduxFile/todos/todos.action'


export const TodoInput = () => {
    const [value,setValue] = useState("")
    const dispatch = useDispatch()
  return (
    <div>
        
        <input type="text" value={value} placeholder='Add Product' onChange={(e)=>setValue(e.currentTarget.value)} />
        <button onClick={()=>{
            dispatch(AddTodo(value))
            setValue("")
        }}>ADD</button>
    </div>
  )
}
