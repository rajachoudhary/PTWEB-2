import { ADD_TODO, DELETE_TODO } from "./todos.actionTypes"
import {v4} from "uuid"

export const AddTodo = (value)=>({
    type:ADD_TODO,
    payload:{
        value,
        id:v4()
    }
})
export const DeleteTodo = (todosId)=>({
    type:DELETE_TODO,
    payload:todosId
})