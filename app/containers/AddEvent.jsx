import React from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { addEvent } from '../actions';
import AddEventForm from '../components/AddEventForm';

const AddEvent = ({ dispatch }) => (
  <div>
    <AddEventForm onSubmit={(values) => {
      dispatch(addEvent(
        values.eventName,
        values.startTime,
        values.endTime,
        values.description,
        values.location,
        values.tags.split(' '),
        values.photo,
      ));
      dispatch(reset('AddEventForm'));
    }}
    />
  </div>
);

export default connect()(AddEvent);
