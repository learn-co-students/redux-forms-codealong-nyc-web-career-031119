export default function manageTodo(state = {
  todos: ['a', 'b']
}, action) {

  switch (action.type) {
    case 'ADD_TODO':
      return {...state, {
                          state.todos, [action.payload]
                        }

    }
    }
    default:
      return state;
  }
}
