import { UPDATE_TEXT_INPUT } from "./types";

export function textInputChange(textKey, textInput) {
  let tempObj = {};
  tempObj[textKey] = textInput;

  return {
    type: UPDATE_TEXT_INPUT,
    payload: tempObj
  };
}
