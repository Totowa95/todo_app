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

const initialState = {
  todos: [],
}


let filterBy;

export const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_TODO:		
		case DELETE_TODO:
		case DOWNLOADED_TODOS:    
    case CLEAR_COMPLETED_TODOS:
    case EDITING_TODO:
    case TOGGLE_COMPLETE:
    case CHANGE_COMPLETED_TODOS:
      return { 
        ...state, 
        todos: action.payload,
        filteredTodos: filterBy === undefined || filterBy === 'all' 
        ? action.payload
        : action.payload.filter(todo => todo.completed === filterBy)
      };
    case FILTERED_TODOS:
     filterBy = action.filterBy;
      return { 
        ...state, 
        filteredTodos: action.filter,
      };      

		default: 
			return state;
	}
}