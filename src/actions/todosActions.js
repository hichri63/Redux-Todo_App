
import { ADD_TodoReducers } from "./types";
import {Del_TodoReducers} from "./types";
import {Com_TodoReducers} from "./types";
import {Edit_TodoReducers}  from "./types"


export const Add=newTodo =>{
    return{
        type:ADD_TodoReducers,
        payload: newTodo

    };
};
export const Del = (id) =>{
    return{
        type:Del_TodoReducers,
        payload: id

    };
};
export const Comp = (id) =>{
    return{
        type:Com_TodoReducers,
        payload: id

    };
};
export const Edit = (id,name) =>{
    return{
        type:Edit_TodoReducers,
        payload: {id , name}

    };
};



