const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        text: action.text,
        completed: false,
        id: action.id
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        completed: !state.completed
      })
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': // return a new state with everything the same plus the new todo object
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map((t) => todo(t, action))
    default:
      return state
  }
}

export default todos
