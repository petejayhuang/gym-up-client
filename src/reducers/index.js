import { combineReducers } from 'redux'
import textInput from './textInputReducer'
import user from './userReducer'
import { sessionsReducer } from './sessionReducer'

const reducers = combineReducers({
  registerForm: textInput,
  currentSession: sessionsReducer,
  user
})

export default reducers;