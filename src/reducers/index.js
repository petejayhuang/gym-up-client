import { combineReducers } from 'redux'
import textInput from './textInputReducer'
import user from './userReducer'

const reducers = combineReducers({
  registerForm: textInput,
  user
})

export default reducers;