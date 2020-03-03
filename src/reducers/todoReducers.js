  
import { v4 as uuidv4 } from 'uuid';
import {ADD_TodoReducers,Del_TodoReducers,Com_TodoReducers, Edit_TodoReducers} from'../actions/types';




const intialState=[{
    name:"slim",
    id:uuidv4(),
    complete:false
},
{
    name:"mouhib",
    id:uuidv4(),
    complete:false
},
{
    name:"rahma",
    id:uuidv4(),
    complete:false
}]






const TodoReducers = (state=intialState, action) =>{
switch(action.type){
    case ADD_TodoReducers:
        return state.concat(action.payload);
        case Del_TodoReducers:
            return state.filter(el=> el.id !== action.payload);
            case Com_TodoReducers:
                return state.map(el=>el.id===action.payload ?{...el,complete:!el.complete }:el);
                case Edit_TodoReducers:
                    return state.map(el=>el.id===action.payload.id ? action.payload : el)
     
     
     
     
     
     
     
     
        default:
     return state;  
        
}



}

export default TodoReducers;