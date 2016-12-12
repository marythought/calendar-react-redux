import uuid from 'uuid'

// defining a function that takes parameter text and returns an object
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: uuid.v4(),
    text // same as writing text: text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
