import { combineReducers } from 'redux'
import textInput from './textInputReducer'
import user from './userReducer'
import exercises from './exerciseReducer'
import { sessionsReducer } from './sessionReducer'
import requesting from './requestReducer'
import sessions from './sessionsReducer'


const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_SUCCESS") {
    state = {};
  }
  return reducers(state, action)
}

const reducers = combineReducers({
  registerForm: textInput,
  currentSession: sessionsReducer,
  user,
  exercises,
  requesting,
  sessions
})

export default rootReducer;