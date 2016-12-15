import React from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import { addEvent } from '../actions'
import AddEventForm from '../components/AddEventForm'

const AddEvent = ({ dispatch }) => {
  return (
    <div>
      <AddEventForm onSubmit={(values) => {
        console.log(values);
        dispatch(addEvent(
          values.eventName,
          values.startTime,
          values.endTime,
          values.description,
          values.location,
          values.tags,
          values.photo
        ))
        dispatch(reset('AddEventForm'))
      }} />
    </div>
  )
}

export default connect()(AddEvent)
