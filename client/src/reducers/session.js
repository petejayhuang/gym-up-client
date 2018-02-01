import {
  CREATE_SESSION_SUCCESS,
  UPDATE_SESSION_SUCCESS,
  FINISH_SESSION_SUCCESS,
  DELETE_SESSION_SUCCESS,
  CREATE_WORKOUT_SUCCESS
} from "../actions/types";
import workoutsReducer from "./workouts";

const sessionDefaultState = {
  name: null,
  start: null,
  intensity: "",
  finish: "",
  comments: "",
  workouts: []
};

const session = (state = sessionDefaultState, action) => {
  switch (action.type) {
    case CREATE_SESSION_SUCCESS:
      return Object.assign({}, state, action.payload);
    case UPDATE_SESSION_SUCCESS:
      return Object.assign({}, state, action.payload);
    case FINISH_SESSION_SUCCESS:
      return {};
    case DELETE_SESSION_SUCCESS:
      return state;
    case CREATE_WORKOUT_SUCCESS:
      return Object.assign({}, state, {
        workouts: workoutsReducer(state.workouts, action)
      });
    default:
      return state;
  }
};

export default session;
