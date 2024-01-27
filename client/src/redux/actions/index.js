import axios from "axios"
import { ADDNEW_TODO,GETALL_TODO,TOGGLE_TODO,UPDATE_TODO,DELETE_TODO } from "./type"

const APP_URL="http://localhost:8000"


export const addNewTodo=(data)=>async(dispatch)=>{
    try {
      const response=await axios.post(`${APP_URL}/todos`,{data})
      dispatch({type:ADDNEW_TODO , payload:response.data})
      
    } catch (error) {
        console.log(error.message);
    }
}
export const getAllTodos=()=>async(dispatch)=>{
  try {
    const response=await axios.get(`${APP_URL}/todos`)
    dispatch({type:GETALL_TODO , payload:response.data})
    
  } catch (error) {
      console.log(error.message);
  }
}



export const toggleTodo=(id)=>async(dispatch)=>{
  try {
    const response=await axios.get(`${APP_URL}/todos/${id}`)
    dispatch({type:TOGGLE_TODO , payload:response.data})
    
  } catch (error) {
      console.log(error.message);
  }
}

export const updateTodo=(id,data)=>async(dispatch)=>{
  try {
    const response=await axios.put(`${APP_URL}/todos/${id}`,{data})
    dispatch({type:UPDATE_TODO , payload:response.data})
    
  } catch (error) {
      console.log(error.message);
  }
}


export const deleteTodo=(id)=>async(dispatch)=>{
  try {
    const response=await axios.delete(`${APP_URL}/todos/${id}`)
    dispatch({type:DELETE_TODO , payload:response.data})
    
  } catch (error) {
      console.log(error.message);
  }
}
