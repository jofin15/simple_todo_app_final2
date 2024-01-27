import React, { useState } from 'react';
import { deleteTodo, toggleTodo, updateTodo } from '../redux/actions';
import { useDispatch } from 'react-redux';

function TodoList({ item }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(item.data);

  const onSubmitButton = (e) => {
    e.preventDefault();
    setEditing(false); // Set editing to false when the form is submitted
    dispatch(updateTodo(item._id, text));
  };

  return (
    <li
      className='task'
      onClick={() => dispatch(toggleTodo(item._id))}
      style={{
        textDecoration: item.done ? 'line-through' : null,
        color: item.done ? '#bdc3c7' : null,
      }}
    >
      <span style={{ display: editing ? 'none' : '' }}>{item.data}</span>

      <form style={{ display: editing ? 'inline' : 'none' }} onSubmit={onSubmitButton}>
        <input
          type='text'
          value={text}
          className='edit-todo'
          onChange={(e) => setText(e.target.value)}
        />
      </form>

      <span className='icon'>
        <i className='fas fa-trash' onClick={()=>dispatch(deleteTodo(item._id))}/>
      </span>
      <span className='icon' onClick={() => setEditing((prevState) => !prevState)}>
        <i className='fas fa-pen' />
      </span>
    </li>
  );
}

export default TodoList;
