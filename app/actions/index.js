import uuid from 'uuid';

// defining a function that takes parameter text and returns an object
export const addEvent = (startTime, endTime, eventName, description, location, tags, photo) => ({
  type: 'ADD_EVENT',
  id: uuid.v4(),
  startTime,
  endTime,
  eventName,
  description,
  location,
  tags,
  photo,
});

// export const toggleEvent = (id) => {
//   return {
//     type: 'TOGGLE_TODO',
//     id
//   }
// }
