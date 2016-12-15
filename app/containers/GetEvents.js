import { connect } from 'react-redux'
import Calendar from '../components/Calendar'

const getNewEvents = (events) => {
  return events
}

const mapStateToProps = (state) => {
  return {
    events: getNewEvents(state.events)
  }
}

const GetEvents = connect(mapStateToProps)(Calendar)

export default GetEvents
