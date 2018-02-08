import {
  CREATE_WORKOUT_SUCCESS,
  UPDATE_WORKOUT_SUCCESS
} from "../actions/types";

const workout = (state = [], action) => {
  switch (action.type) {
    case CREATE_WORKOUT_SUCCESS:
      let newState = [...state];
      newState.push(action.payload);
      return newState;
    case UPDATE_WORKOUT_SUCCESS:
    // TODO - find the item in the array, replace with the new one
      const itemToRemove = state.indexOf();
      return state;
    default:
      return state;
  }
};

export default workout;
