

import { ADD_TODO, DELETE_TODO } from "./todos.actionTypes"
import { initialaState } from "./todos.constants"


export const todosReducer = (state = initialaState,{type,payload})=>{
   
    switch (type) {
     
        case ADD_TODO:{
            return {...state,data:[...state.data,payload]}

        }
        case DELETE_TODO:{
            return {...state,data:state.data.filter((todo)=>todo.id !== payload)}

        }
        
        default:
            return state
    }
}