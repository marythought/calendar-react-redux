import uuid from 'uuid'

// defining a function that takes parameter text and returns an object
export const addEvent = (object) => {
  return {
    type: 'ADD_EVENT',
    id: uuid.v4(),
    object
  }
}

// export const toggleEvent = (id) => {
//   return {
//     type: 'TOGGLE_TODO',
//     id
//   }
// }
