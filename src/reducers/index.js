import { combineReducers } from 'redux'
import textInput from './textInputReducer'
import user from './userReducer'
import exercises from './exerciseReducer'
import { sessionsReducer } from './sessionReducer'
import userInterface from './userInterfaceReducer'
import requesting from './requestReducer'

const reducers = combineReducers({
  registerForm: textInput,
  currentSession: sessionsReducer,
  user,
  exercises,
  userInterface,
  requesting
})

export default reducers;