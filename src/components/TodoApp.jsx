import React, { useState } from 'react';
import { connect } from 'react-redux'
import { createTodo } from '../redux/actions'
// import PropTypes from 'prop-types';

const TodoApp = ({ createTodo }) => {
  const [todo, setTodo] = useState('');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (todo.length > 0) {
          createTodo(+new Date(), todo.trim());
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

const mapDispatchToProps = {
  createTodo,
}

export default connect(null, mapDispatchToProps)(TodoApp)