import {
  CREATE_WORKOUT_REQUEST,
  CREATE_WORKOUT_SUCCESS,
  CREATE_WORKOUT_FAILURE
} from "../actions/types";

const workout = (state = [], action) => {
  switch (action.type) {
    case CREATE_WORKOUT_REQUEST:
      return state;
    case CREATE_WORKOUT_SUCCESS:
      let newState = [...state];
      newState.push(action.payload);
      return newState;
    case CREATE_WORKOUT_FAILURE:
      return state;
    default:
      return state;
  }
};

export default workout;
