import { ADD_TODO, DECREMENT, DELETE_TODO, INCREMENT, USER_LOGIN, USER_LOGOUT } from "./ActionType"

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
        case USER_LOGIN:{
            return {...state,auth:{
                ...state,
                isuserLogin:true,
                userToken:"ABCD "
            }}
        }
        case USER_LOGOUT:{
            return {...state,auth:{
                ...state,
                isuserLogin:false,
                userToken:""
            }}
        }
    
        default:
            return state
    }
}