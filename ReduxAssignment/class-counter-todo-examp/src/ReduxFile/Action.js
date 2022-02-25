import { ADD_TODO, DELETE_TODO, USER_LOGIN, USER_LOGOUT } from "./ActionType";
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

export const login = ()=> ({
    type:USER_LOGIN
})
export const logout = ()=> ({
    type:USER_LOGOUT
})