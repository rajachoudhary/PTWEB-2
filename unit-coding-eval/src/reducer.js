import { combineReducers } from "redux";
import { authReducer } from "./ReduxFile/auth/auth.reducer";

export default combineReducers({
    
    auth:authReducer

})