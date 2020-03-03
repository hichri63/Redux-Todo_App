import React, { Component } from "react";
import {connect} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {Add} from '../actions/todosActions';
import {Del,Comp,Edit} from '../actions/todosActions';



class TodoListe extends Component {
    constructor(props) {
        super(props);
    this.state = {
        input:"",
        editmode: false
    };
}
    changeInput = e =>{
        this.setState({input: e.target.value });
    }
    delete = id =>{
        this.props.DelTodo(id)

        }
    editandreset = () => {
        this.props.EditTodo(this.state.id, this.state.input)
        this.setState({input: '', editmode: false})
    }
    add = ()=> {
        this.state.editmode ? this.editandreset() :
        this.props.AddnewTodo({
           name:this.state.input,
            id:uuidv4(),
            comlpete:false
    })
}
complete=(id)=>{
    this.props.ComTodo(id)
}
Edit=(id , name)=>{
    this.setState({
        input : name,
        id: id,
        editmode: true
    })
}
            
    
    render(){
        return(
            <div>
                <h1>Daily Todo Lists</h1>
                <input type='text' placeholder='Add new lists' onChange={this.changeInput} value={this.state.input} />
                <button onClick={this.add}>{this.state.editmode ? 'Edit' : 'Add'}</button>
                {this.props.todos.map(el=>(
                    <div>
                        <h3 className={el.complete ? "complete":''}>{el.name}</h3>
                <button onClick={()=>this.complete(el.id)}>{el.complete? 'undo':'complete'}</button>
                        <button onClick={()=>this.delete(el.id)}>Delete</button>
                        <button onClick={()=>this.Edit(el.id, el.name)}>Edit</button>
                    </div> 
                ))}
            </div>
        )
    }
    }
const mapStateToprops = state=> {
    return {
        todos:state.TodoReducers

    };

};

     const mapDipatchToprops=(dispatch)=>{

    return{
        AddnewTodo:(newtodo)=>dispatch(Add(newtodo)),
        DelTodo:id=>dispatch(Del(id)),
        ComTodo:id=>dispatch(Comp(id)),
        EditTodo:(id, name)=>dispatch(Edit(id, name))
    }
}


export default connect(mapStateToprops,mapDipatchToprops)(TodoListe);
 