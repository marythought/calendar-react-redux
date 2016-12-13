import React from 'react'
import { Field, reduxForm } from 'redux-form'

const AddEventForm = ({ handleSubmit }) =>
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor='eventName'>Event Name:</label>
      <Field name='eventName' component='input' type='text' placeholder='React Class'/>
    </div>
    <div>
      <label htmlFor='eventDescription'>Event Description:</label>
      <Field name='eventDescription' component='input' type='textarea' placeholder='Learn React.'/>
    </div>
    <div>
      <label>Start:</label>
      <Field component='input' name='eventStart' type='datetime' placeholder='January 1, 2017'/><br />
    </div>
    <div>
      <label>End:</label>
      <Field component='input' name='eventEnd' type='datetime' placeholder='January 30, 2017'/><br />
    </div>
    <label>Photo:</label>
    <Field component='input' name='event_photo' type='url' label='Photo' placeholder='https://facebook.github.io/react/img/logo.svg'/><br />
    <button type='submit'>Submit</button>
  </form>

export default reduxForm({
  form: 'addEventForm'
})(AddEventForm);
