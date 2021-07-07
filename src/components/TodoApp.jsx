import React, { useState } from 'react';
import { createTodo } from '../redux/actions'
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';

const TodoApp = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState('');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (todo.length > 0) {
          dispatch(createTodo({
            id:+new Date(),
            title:todo.trim(),
            completed: false,
          }));
          setTodo('');
        }
        return;
      }}
    >
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        value={todo}
        onChange={({ target }) => setTodo(target.value.trimLeft())}
      />
    </form>
  );
};

// TodoApp.propTypes = {
//   getTodo: PropTypes.func.isRequired,
// };

export default TodoApp;