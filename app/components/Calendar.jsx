import React from 'react';
import PropTypes from 'prop-types';
import Event from './Event';

const Calendar = ({ events }) => (
  <ul>
    {events.map((event) => (
      <Event
        key={event.id}
        {...event}
      />
    ))}
  </ul>
);

export default Calendar;

Calendar.propTypes = {
  events: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};
