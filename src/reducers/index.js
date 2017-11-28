import { combineReducers } from 'redux'
import textInput from './textInputReducer'
import user from './userReducer'
import exercises from './exerciseReducer'
import { sessionsReducer } from './sessionReducer'

const reducers = combineReducers({
  registerForm: textInput,
  currentSession: sessionsReducer,
  user,
  exercises
})

export default reducers;