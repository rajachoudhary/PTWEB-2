import React from 'react';
import { TodoList } from './TodoList';
import style from "./TodoItem.module.css"
export const TodoItem = () => {
    const [query,setQuery] = React.useState("")
    const [state, setState] = React.useState([])
    const handleClick = (query)=>{
        const payload = {
            title:query,
            status:false
        }
        const newTask = [...state,payload]
        setState(newTask)
    }
    
  return (
      <div className={style.container}>
          <input type="text" placeholder='Type Here' value={query} onChange={(e)=>setQuery(e.target.value)}/>
          <button onClick={()=>handleClick(query)}>Add</button>
          {
              state.map((item)=>{
                  return(
                      <TodoList {...item} />
                  )
              })
          }
      </div>
  );
};
