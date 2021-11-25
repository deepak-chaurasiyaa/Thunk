import React from 'react'
import {useDispatch} from "react-redux"
import {v4 as uuid} from "uuid"
import { addTodo, addTodoError, addTodoLoading, addTodoSuccess } from '../store/action';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { store } from '../store/store';
 function TodoInput() {
     
    const [title,setTitle] = React.useState("")
     const {data,loading,error} =  useSelector((store) => store.todos);
 
     const dispatch = useDispatch();
    const handleAdd = async () =>{
        dispatch(addTodoLoading())
        const payload = {
            title,
            status:false,
            id:uuid()
        }
        try{
            const {data} =await axios.post("http://localhost:3002/todos",payload)
            
            dispatch(addTodoSuccess(data))
        }catch(err){
            dispatch(addTodoError(err))
        }
    }
    return (
        <div>
            <h3>Add todo</h3>
            <input value = {title}
            onChange = {(e) =>setTitle(e.target.value)}
            type="text" placeholder= "Add Something"/>
            <button onClick = {handleAdd}>ADD</button>
            { data.map(item=><div key ={ item.id}>{item.title} </div>)}
        </div>
    )
}

export default TodoInput
