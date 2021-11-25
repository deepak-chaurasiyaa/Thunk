import { ADD_COUNT, ADD_TODO,ADD_TODO_LOADING, ADD_TODO_ERROR, ADD_TODO_SUCCESS, SUB_COUNT, } from "./actionType";

 export const addCount = (data) =>({type: ADD_COUNT,payload:data});
 export const subCount = (data) =>({type: SUB_COUNT,payload:data});
 export const addTodo = (todo) =>({type: ADD_TODO,payload:todo});

 export const addTodoLoading = () => ({type:ADD_TODO_LOADING})
export const addTodoSuccess = (data) => ({type:ADD_TODO_SUCCESS,payload:data})
export const addTodoError = (err) => ({type:ADD_TODO_ERROR,payload:err})