import { combineReducers } from 'redux';
import textInput from './textInputReducer'

const reducers = combineReducers({
  registerForm: textInput
})

export default reducers;