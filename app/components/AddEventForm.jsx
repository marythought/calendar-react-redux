import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

const AddEventForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="eventName">
        Event Name:
        <Field name="eventName" component="input" type="text" placeholder="React Class" />
      </label>
    </div>
    <div>
      <label htmlFor="description">
        Event Description:
        <Field name="description" component="input" type="textarea" placeholder="Learn React." />
      </label>
    </div>
    <div>
      <label htmlFor="startTime">
        Start:
        <Field component="input" name="startTime" type="datetime" placeholder="January 1, 2017" />
      </label>
      <br />
    </div>
    <div>
      <label htmlFor="endTime">
        End:
        <Field component="input" name="endTime" type="datetime" placeholder="January 30, 2017" />
      </label>
      <br />
    </div>
    <div>
      <label htmlFor="location">
        Location:
        <Field component="input" name="location" type="text" placeholder="Outer Space" />
      </label>
      <br />
    </div>
    <div>
      <label htmlFor="tags">
        Tags:
        <Field component="input" name="tags" type="text" placeholder="education" />
      </label>
      <br />
    </div>
    <label htmlFor="photo">
      Photo:
      <Field component="input" name="photo" type="url" label="Photo" placeholder="https://facebook.github.io/react/img/logo.svg" />
    </label>
    <br />
    <input type="submit" value="Add Event" />
  </form>
);

export default reduxForm({
  form: 'AddEventForm',
})(AddEventForm);

AddEventForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
