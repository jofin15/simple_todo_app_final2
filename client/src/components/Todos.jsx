import React, { useEffect } from 'react';
import { getAllTodos } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <article>
      <ul>
        {todos.map((item) => (
          <TodoList key={item._id} item={item} />
        ))}
      </ul>
    </article>
  );
}

export default Todos;
