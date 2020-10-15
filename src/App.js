import React, { useState, useMemo, useEffect } from 'react';
import TodoApp from './components/TodoApp';
import TodoList from './components/TodoList';
import { TodosFilter } from './components/TodosFilter';
import { useDispatch, useSelector } from 'react-redux';
import { downloadedFromLocal, toggleComplete } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);
  const [filterBy, setFilterBy] = useState('all');

  console.log(todos)

  useEffect(() => {
    if (localStorage.getItem('list') !== null) {
      dispatch(downloadedFromLocal(JSON.parse(localStorage.getItem('list'))));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = useMemo(() => todos.filter(todo => ((filterBy === 'all')
    ? todo
    : todo.completed === filterBy)), [filterBy, todos]);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos App</h1>

        <TodoApp />
      </header>

      <section className="main">
        <input
          type="checkbox"
          id="toggle-all"
          className="toggle-all"
          checked={todos.length > 0 && todos.every(todo => todo.completed)}
          onClick={() => {
            dispatch(toggleComplete());
          }}
          readOnly
        />
        <label
          htmlFor="toggle-all"
        >
          Mark all as complete
        </label>

        <TodoList />
      </section>

      {
        !todos.length
        || (
          <TodosFilter
            todosLeft={
              todos
                .filter(todo => todo.completed === false)
                .length
            }
            showTodos={setFilterBy}
            completedTodos={todos.some(todo => todo.completed)}
          />
        )
      }
    </section>
  );
}

export default App;