import {
  CREATE_WORKOUT_SUCCESS,
  UPDATE_WORKOUT_SUCCESS,
  DELETE_WORKOUT_SUCCESS
} from "../actions/types";

const workout = (state = [], action) => {
  switch (action.type) {
    case CREATE_WORKOUT_SUCCESS:
      let newState = [...state];
      newState.push(action.payload);
      return newState;
    case UPDATE_WORKOUT_SUCCESS:
      // TODO - find the item in the array, replace with the new one
      return state.reduce((accumulator, current, index) => {
        if (current.id === action.payload.id) {
          return accumulator.push(action.payload);
        }
        return accumulator.push(current);
      }, []);
    case DELETE_WORKOUT_SUCCESS:
      return state.filter(workout => workout.id !== action.payload.id);
    default:
      return state;
  }
};

export default workout;
