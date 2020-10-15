import { 
  CREATE_TODO,
  DELETE_TODO,
  DOWNLOADED_TODOS,
  CLEAR_COMPLETED_TODOS,
  CHANGE_COMPLETED_TODOS,
  EDITING_TODO,
  TOGGLE_COMPLETE,
  // FILTERED_TODOS,
} from "./types";

export function createTodo(id, todo, completed = false) {
  return {
    type: CREATE_TODO,
    payload: {
      id,
      title: todo,
      completed
    },
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export function downloadedFromLocal(todos) {
  return {
    type: DOWNLOADED_TODOS,
    payload: todos,
  }
}

export function clearCompleted() {
  return {
    type: CLEAR_COMPLETED_TODOS,
  }
}

export function changeCompleted(id) {
  return {
    type: CHANGE_COMPLETED_TODOS,
    payload: id,
  }
}

export function editingTodo(id, newTitle) {
  return {
    type: EDITING_TODO,
    payload: { id, newTitle },
  }
}

export function toggleComplete() {
  return {
    type: TOGGLE_COMPLETE,
  }
}

// export function filteredTodo(filterBy) {
//   return {
//     type: FILTERED_TODOS,
//     payload: filterBy,
//   }
// }