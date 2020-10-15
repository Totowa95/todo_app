import React from 'react';
// import PropTypes, { object } from 'prop-types';
import { connect } from 'react-redux'
import { editingTodo } from '../redux/actions'

import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {

  return (
    <ul className="todo-list">
      {todos.map(item => (
        <TodoItem
          todo={item}
          key={item.id}
        />
      ))}
    </ul>
  );
};

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(object).isRequired,
//   changeCompleted: PropTypes.func.isRequired,
//   deleteTodo: PropTypes.func.isRequired,
//   editingTodo: PropTypes.func.isRequired,
// };

const mapStateToProps = state => {
  return {
    todos: state.todos.todos,
  };
};

const mapDispatchToProps = {
  editingTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)