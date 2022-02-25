import { ADD_TODO, DECREMENT, DELETE_TODO, INCREMENT } from "./ActionType"

export const Reducer = (state,{type,payload})=>{
   
    switch (type) {
        case INCREMENT:{
            return {...state,count:state.count+1}

        }
        case DECREMENT:{
            return {...state,count:state.count-1}

        }
        case ADD_TODO:{
            return {...state,todos:[...state.todos,payload]}

        }
        case DELETE_TODO:{
            return {...state,todos:state.todos.filter((todo)=>todo.id !== payload)}

        }
    
        default:
            return state
    }
}