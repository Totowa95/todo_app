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

const initialState = {
	todos: [],
}

export const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_TODO:		
		case DELETE_TODO:
		case DOWNLOADED_TODOS:    
    case CLEAR_COMPLETED_TODOS:
    case CHANGE_COMPLETED_TODOS:
    case EDITING_TODO:
    case TOGGLE_COMPLETE:
      return { 
        ...state, 
        todos: action.payload,
      };
      
    // case FILTERED_TODOS:
    //   return { 
    //     
    //   };
    
		default: 
			return state;
	}
}