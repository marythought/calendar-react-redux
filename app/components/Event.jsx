import React from 'react';
import PropTypes from 'prop-types';

const Event = ({
  startTime, endTime, eventName, description, location, tags, photo,
}) => (
  <li className="event">
    <h1>{eventName}</h1>
    <p>
      Starts:
      {startTime}
      | Ends:
      {endTime}
    </p>
    <p>
      Location:
      {location}
    </p>
    <img src={photo} alt="" />
    <p>{description}</p>
  </li>
);

export default Event;

Event.propTypes = {
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  eventName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  photo: PropTypes.string,
};

Event.defaultProps = {
  startTime: '',
  endTime: '',
  location: '',
  tags: [],
  photo: '',
};
