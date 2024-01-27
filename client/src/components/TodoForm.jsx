import React, { useState } from 'react'
import { addNewTodo } from '../redux/actions'
import {useDispatch} from "react-redux"

function TodoForm() {

  const dispatch=useDispatch()
    const [todo,setTodo]=useState("")

    const onFormSubmit=(e)=>{
        e.preventDefault()
        dispatch(addNewTodo(todo))
        setTodo("")
    }

    const onInputChange=(e)=>{
       setTodo(e.target.value)
    }
  return (
    <div>
        <form className='form' onSubmit={onFormSubmit}>
            <input type="text" placeholder='enter your task' className='input' onChange={onInputChange} value={todo}/>
        </form>
    </div>
  )
}

export default TodoForm