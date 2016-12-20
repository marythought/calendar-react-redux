import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import events from './events'

const eventApp = combineReducers({
  form: formReducer,
  events
})

export default eventApp
