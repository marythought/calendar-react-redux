import { connect } from 'react-redux'
import Calendar from '../components/Calendar'

const getVisibleEvents = (events, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return events
    case 'SHOW_ACTIVE':
      return events.filter((t) => t.completed)
    case 'SHOW_COMPLETED':
      return events.filter((t) => !t.completed)
    default:
      return events
  }
}

const mapStateToProps = (state) => {
  return {
    events: getVisibleEvents(state.events, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEventClick: (id) => dispatch(toggleEvent(id))
  }
}

const VisibleEventsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar) // makes the smart component aware of the state

export default VisibleEventsList
