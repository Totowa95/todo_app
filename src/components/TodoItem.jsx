import React, { useState } from 'react';
import { connect } from 'react-redux'
import { deleteTodo, changeCompleted, editingTodo } from '../redux/actions'
import classNames from 'classnames';
// import PropTypes from 'prop-types';

const TodoItem = ({ todo, deleteTodo, changeCompleted, editingTodo }) => {
  const [currentTodo, setCurrentTodo] = useState(todo.title);
  const [newTodo, setEditigTodo] = useState(currentTodo);
  const [editing, setEditing] = useState(false);

  return (
    <li className={classNames({
      completed: todo.completed,
      editing,
    })}
    >
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={todo.completed}
          onChange={() => {
            changeCompleted(todo.id);
          }}
        />
        <label onDoubleClick={() => setEditing(true)}>
          {currentTodo}
        </label>
        <button
          type="button"
          className="destroy"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        />
      </div>
      {editing && (
        <input
          type="text"
          className="edit"
          autoFocus
          value={newTodo}
          onBlur={() => setEditing(false)}
          onChange={({ target }) => {
            setEditigTodo(target.value);
          }}
          onKeyDown={(event) => {
            switch (event.key) {
              case 'Enter':
                if (newTodo) {
                  editingTodo(todo.id, newTodo);
                  setCurrentTodo(newTodo);
                  setEditing(false);

                  return;
                }

                deleteTodo(todo.id);
                setEditing(false);

                return;

              case 'Escape':
                setEditigTodo(currentTodo);
                setEditing(false);
                break;

              default:
            }
          }}
        />
      )}
    </li>
  );
};

// TodoItem.propTypes = {
//   todo: PropTypes.shape({
//     completed: PropTypes.bool.isRequired,
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//   }).isRequired,
//   complete: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
//   todoWasEdited: PropTypes.func.isRequired,
// };

const mapDispatchToProps = {
  deleteTodo, 
  changeCompleted,
  editingTodo,
}

export default connect(null, mapDispatchToProps)(TodoItem)