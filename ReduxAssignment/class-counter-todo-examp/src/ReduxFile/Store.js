import { createStore } from "redux";
import { Reducer } from "./Reducer";

export const Store = createStore(Reducer,{
    count:5,
    todos:[],
    auth:{
        isuserLogin:false,
        tokenId:""
    },
   
}) 
