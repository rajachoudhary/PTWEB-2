import {  compose, createStore } from "redux";
import Reducer from "./reducer";

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose


export const Store = createStore(
    Reducer,
   createComposer()
) 