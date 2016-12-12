// import PropTypes from react explicitly to avoid retyping React before every instance below. see Todo.js for alternative usage.
import React, { PropTypes } from 'react'
import Event from './Event'

const Calendar = ({ events }) =>
  <ul>
    {events.map((event) =>
      <Event
        key={event.id}
        {...event}
      />
    )}
  </ul>

// const propTypes = {
//   events: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   onToDoClick: PropTypes.func.isRequired
// }

export default Calendar
