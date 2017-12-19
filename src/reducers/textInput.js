import { UPDATE_TEXT_INPUT } from "../actions/types";

const textInputChange = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TEXT_INPUT:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default textInputChange;
