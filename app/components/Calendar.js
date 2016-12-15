import Event from './Event'

const Calendar = ({ events }) =>
  <ul>{console.log(events)}
    {events.map((event) =>
      <Event
        key={event.id}
        {...event}
      />
    )}
  </ul>

export default Calendar
