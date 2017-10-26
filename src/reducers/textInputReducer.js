import { TEXT_INPUT_CHANGE } from '../actions/actionTypes'

export default function textInputChange(state = {}, action) {
  switch (action.type) {
    case TEXT_INPUT_CHANGE:
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}