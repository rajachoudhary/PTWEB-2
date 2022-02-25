import React from 'react'
import { useDispatch } from 'react-redux';
import { DeleteTodo } from '../ReduxFile/Action';

export const TodoList = ({todo}) => {
   
    const dispatch = useDispatch()
  return (
    <div >
        <div>{todo.value}</div>
        <button onClick={()=>dispatch(DeleteTodo(todo.id))}>Delete</button>
    </div>
  )
}
