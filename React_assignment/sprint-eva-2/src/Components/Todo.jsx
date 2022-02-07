import { TodoInput } from "./TodoInput"
import style from "./Todo.module.css"

export const Todo = () => {
  return(
    <div className={style.container}>
      <TodoInput/>
    </div>
  )
}