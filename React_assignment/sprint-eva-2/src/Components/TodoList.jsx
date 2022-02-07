import style from "./Todo.module.css"
export const TodoList = ({query,status,id,handleDelete,handleToggle,handleComplete}) => {

  return(
   
    <div className={style.todoList}>
      <div className={status ? style.completed : style.inCompleted}>{query}</div>
      <button onClick={()=>handleToggle(id)} >{`${status}`}</button>
      <button onClick={()=>handleDelete(id)}>Delete</button>
    </div>
    
  )
}