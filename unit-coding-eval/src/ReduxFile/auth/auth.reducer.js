import { USER_LOGIN, USER_LOGOUT } from "./auth.actionTypes"
import { initialState } from "./auth.constants"

export const authReducer = (state = initialState,{type,payload})=>{
   
    switch (type) {
        
        case USER_LOGIN:{
            
            return {...state,
                isuserLogin:true,
                
              
            }
        }
        case USER_LOGOUT:{

           
            return {...state,
                isuserLogin:false,
                username:payload
               
            }
        }
    
        default:
            return state
    }
}