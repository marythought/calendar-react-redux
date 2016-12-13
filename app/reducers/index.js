import { combineReducers } from 'redux'
import events from './events'
import { reducer as formReducer } from 'redux-form'

const eventApp = combineReducers({
  events,
  form: formReducer
})

export default eventApp
