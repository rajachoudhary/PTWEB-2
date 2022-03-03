
import {  compose, createStore } from "redux";
import Reducer from "./Reducer";

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose

// const logger = (state) => (next) =>(action) =>{
//     console.log("dipatching",action)
//     console.log("old state is",state.getState())
//     let returnValue =  next(action)
//     console.log("new state is",state.getState())
//     return returnValue
// }
export const Store = createStore(
    Reducer,
   createComposer()
) 