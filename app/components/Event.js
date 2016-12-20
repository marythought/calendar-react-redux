import React from 'react'

const Event = ({ startTime, endTime, eventName, description, location, tags, photo }) =>
  <li className='event'>
    <h1>{eventName}</h1>
    <p>Starts: {startTime} | Ends: {endTime}</p>
    <p>Location: {location}</p>
    <img src={photo} />
    <p>{description}</p>
  </li>

const propTypes = {
  startTime: React.PropTypes.string,
  endTime: React.PropTypes.string,
  eventName: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  location: React.PropTypes.string,
  tags: React.PropTypes.array,
  photo: React.PropTypes.string
}

export default Object.assign(Event, { propTypes })
