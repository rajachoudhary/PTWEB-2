import React from 'react'
import { useSelector } from 'react-redux'

import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'

export const Todos = () => {
    const todos  = useSelector((state)=>state.todos) 
  
  return (
    <div>
     <TodoInput/>
        <div>
            {
                todos.map((item)=>(
                    <TodoList todo={item}   key={item.id}/>
                ))
            }
        </div>
    </div>
  )
}
