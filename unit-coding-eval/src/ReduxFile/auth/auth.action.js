import { USER_LOGIN, USER_LOGOUT } from "./auth.actionTypes"


export const login = ()=> ({
    type:USER_LOGIN
    
})
export const logout = (value)=> ({
    type:USER_LOGOUT,
    payload:value,
   
})