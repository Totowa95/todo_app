import { 
  CREATE_TODO,
  DELETE_TODO,
  DOWNLOADED_TODOS,
  CLEAR_COMPLETED_TODOS,
  CHANGE_COMPLETED_TODOS,
  EDITING_TODO,
  TOGGLE_COMPLETE,
  FILTERED_TODOS,
} from "./types";
import { store } from './store/configurestore';

export function createTodo(newTodo) {
  const { todos } = store.getState();
  const actualTodos = [newTodo, ...todos.todos];

  return {
    type: CREATE_TODO,
    payload: actualTodos,
  }
}

export function deleteTodo(id) {
  const { todos } = store.getState();
  const actualTodos = todos.todos.filter(todo => todo.id !== id);
  
  return {
    type: DELETE_TODO,
    payload: actualTodos,
  }
}

export function downloadedFromLocal(todos) {
  return {
    type: DOWNLOADED_TODOS,
    payload: todos,
  }
}

export function clearCompleted() {
  const { todos } = store.getState();
  const actualTodos = todos.todos.filter(todo => todo.completed === false);

  return {
    type: CLEAR_COMPLETED_TODOS,
    payload: actualTodos,
  }
}

export function changeCompleted(id) {
  const { todos } = store.getState();
  const actualTodos = todos.todos.map(todo => ((todo.id === id)
  ? { ...todo, completed: !todo.completed }
  : todo));

  return {
    type: CHANGE_COMPLETED_TODOS,
    payload: actualTodos,
  }
}

export function editingTodo(id, newTitle) {
  const { todos } = store.getState();
  const actualTodos = todos.todos.map(todo => ({
    ...todo, 
    title: todo.id === id
    ? newTitle
    : todo.title
  }));


  return {
    type: EDITING_TODO,
    payload: actualTodos,
  }
}

export function toggleComplete() {
  const { todos: wrapper } = store.getState();
  const { todos } = wrapper;
  let actualTodos = null;

  if (todos.length && todos.every(todo => todo.completed)) {
    actualTodos = todos.map(todo => ({ ...todo, completed: false }));
  } else {
    actualTodos = todos.map(todo => ({ ...todo, completed: true }));
  } 
  
  return {
    type: TOGGLE_COMPLETE,
    payload: actualTodos,
  };
}

export function filteredTodo(filterBy) {
  const { todos } = store.getState();
  const filteredTodos = todos.todos.filter(todo => ((filterBy === 'all')
  ? todo
  : todo.completed === filterBy));
  return {
    type: FILTERED_TODOS,
    filter: filteredTodos,
    filterBy,
  }
}