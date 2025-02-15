import { ADD_TODO, TOGGLE_TODO, DELETED } from '../actionsTypes';

const initialState = {
  todos: [],
}

const todos = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        todos: [
          ...state.todos,
          { content, completed: false, id }
        ]
      }
    }

    case DELETED: {
      const { id } = action.payload;
      const index = state.todos.findIndex((task) => id === task.id)
      return {
        ...state,
        todos: [...state.todos.slice(0, index), ...state.todos.slice(index + 1)]
      } // SLICES THE ARRAY OF TODOS AND DELETES IT WHEN SELECTED 
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      const todos = state.todos.map(obj => obj.id === id ? { ...obj, completed: !obj.completed } : obj);
      return { todos }
    } // CHECKS THE STATE OF THE TODOS AND IF COMPLETED MOVES IT TO THE COMPLETED "SIDE" OF FILTER IF NOT LEAVES IT THERE

    default: {
      return state;
    }
  }
}

export default todos;