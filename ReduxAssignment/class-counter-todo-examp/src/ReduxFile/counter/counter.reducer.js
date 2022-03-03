
import { DECREMENT, INCREMENT } from "./counter.actionTypes"
import { initialaState } from "./counter.constants"



export const counterReducer = (state=initialaState,{type})=>{
   
    switch (type) {
        case INCREMENT:{
            return {...state,count:state.count+1}

        }
        case DECREMENT:{
            return {...state,count:state.count-1}

        }
       
        default:
            return state
    }
}