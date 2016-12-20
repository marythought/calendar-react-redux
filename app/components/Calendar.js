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

export default Calendar
