import { DECREMENT, INCREMENT } from "./ActionType"

export const Reducer = (state,{type})=>{
    console.log(type)
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