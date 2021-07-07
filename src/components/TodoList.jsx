import React from 'react';
// import PropTypes, { object } from 'prop-types';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector(state => {
    if (state.todos.filteredTodos !== undefined) {
      return state.todos.filteredTodos;
      
    }
    return state.todos.todos;
  }); 
  
  // if (todos.filteredTodos !== undefined) {
  //   // todos.filterBy
  //   // // return todos.filteredTodos;
    
  //   return todos.todos.filter(todo => {
  //     if (todos.filterBy === 'all') {
  //       return todo;
  //     }
  //     return todo.completed === todos.filterBy

  //   });
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

// const mapStateToProps = state => {
//   return {
//     todos: state.todos.todos,
//   };
// };

// const mapDispatchToProps = {
//   editingTodo,
// }

export default TodoList;