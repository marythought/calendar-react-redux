import React from 'react'
import { Field, reduxForm } from 'redux-form'

const AddEventForm = ({ handleSubmit }) =>
  <form onSubmit={handleSubmit}>
    <div>
      <label>Event Name:</label>
      <Field name='eventName' component='input' type='text' placeholder='React Class' />
    </div>
    <div>
      <label>Event Description:</label>
      <Field name='description' component='input' type='textarea' placeholder='Learn React.' />
    </div>
    <div>
      <label>Start:</label>
      <Field component='input' name='startTime' type='datetime' placeholder='January 1, 2017' /><br />
    </div>
    <div>
      <label>End:</label>
      <Field component='input' name='endTime' type='datetime' placeholder='January 30, 2017' /><br />
    </div>
    <div>
      <label>Location:</label>
      <Field component='input' name='location' type='text' placeholder='Outer Space' /><br />
    </div>
    <div>
      <label>Tags:</label>
      <Field component='input' name='tags' type='text' placeholder='education' /><br />
    </div>
    <label>Photo:</label>
    <Field component='input' name='photo' type='url' label='Photo' placeholder='https://facebook.github.io/react/img/logo.svg' /><br />
    <input type='submit' value='Add Event' />
  </form>

export default reduxForm({
  form: 'AddEventForm'
})(AddEventForm)
