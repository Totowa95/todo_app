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
			return { ...state, todos: [...state.todos, action.payload] };
		
		case DELETE_TODO:
			return { 
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
			};

		case DOWNLOADED_TODOS:
      return { ...state.todos, todos: [...action.payload]};
    
    case CLEAR_COMPLETED_TODOS:
      return { 
        ...state, 
        todos: state.todos.filter(todo => todo.completed === false),
      };

    case CHANGE_COMPLETED_TODOS:
      return { 
        ...state, 
        todos: [ 
          ...state.todos.map(todo => ((todo.id === action.payload)
          ? { ...todo, completed: !todo.completed }
          : todo))
        ],
      };

    case EDITING_TODO:
      return { 
        ...state, 
        todos: [ 
          ...state.todos.map(todo => (todo.id === action.payload.id
            ? ({ ...todo, title: action.payload.newTitle })
            : ({ ...todo })))
        ],
      };

    case TOGGLE_COMPLETE:
      const { todos } = state; 
      console.log('zashlo');

      if (todos.length && todos.every(todo => todo.completed)) {
        return { ...state, todos: [...state.todos.map(todo => ({ ...todo, completed: false }))] };
      }
      
      return { 
        ...state, 
        todos: [ 
          ...state.todos.map(todo => ({ ...todo, completed: true }))
        ],
      }; 
      
    // case FILTERED_TODOS:
    //   return { 
    //     
    //   };
    
		default: 
			return state;
	}
}