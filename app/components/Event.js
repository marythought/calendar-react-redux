import React from 'react'

const Event = ({ start_time, end_time, event_name, description, location, tags, photo }) =>
  <li className={'event'}>
    <h1>{event_name}</h1>
    <img src={photo} />
    <p>{description}</p>
  </li>

const propTypes = {
  start_time: React.PropTypes.string,
  end_time: React.PropTypes.string,
  event_name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  location: React.PropTypes.string,
  tags: React.PropTypes.array,
  photo: React.PropTypes.string
}

export default Object.assign(Event, propTypes)
