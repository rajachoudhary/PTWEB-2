
import { updateValue } from "../../Utils/LocalStorage"
import { USER_LOGIN, USER_LOGOUT } from "./auth.actionTypes"
import { initialaState } from "./auth.constants"


export const authReducer = (state = initialaState,{type})=>{
   
    switch (type) {
        
        case USER_LOGIN:{
            let userToken = "ABCD"
            updateValue("userToken",userToken)
            return {...state,
                isuserLogin:true,
                userToken:userToken
            }
        }
        case USER_LOGOUT:{

            updateValue("userToken","")
            return {...state,
                isuserLogin:false,
                userToken:""
            }
        }
    
        default:
            return state
    }
}