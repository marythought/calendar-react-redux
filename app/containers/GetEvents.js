import { connect } from 'react-redux';
import Calendar from '../components/Calendar';

const getNewEvents = (events) => events;

const mapStateToProps = (state) => {
  return {
    events: getNewEvents(state.events)
  };
};

const GetEvents = connect(mapStateToProps)(Calendar)

export default GetEvents
