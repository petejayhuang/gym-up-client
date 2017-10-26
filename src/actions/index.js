import { 
  TEXT_INPUT_CHANGE,
  SEND_REGISTER_FORM 
} from './actionTypes'

export function textInputChange(textKey, textInput) {
  let tempObj = {};
  tempObj[textKey] = textInput;

  return {
    type: TEXT_INPUT_CHANGE,
    payload: tempObj
  }
} 

export function sendRegisterForm(registerForm){
  return {
    type: SEND_REGISTER_FORM,
    payload: registerForm
  }

}