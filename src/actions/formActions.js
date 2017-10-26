import {
  TEXT_INPUT_CHANGE
} from './actionTypes'

export function textInputChange(textKey, textInput) {
  let tempObj = {};
  tempObj[textKey] = textInput;

  return {
    type: TEXT_INPUT_CHANGE,
    payload: tempObj
  }
}

