import {
  CREATE_SESSION_REQUEST,
  CREATE_SESSION_SUCCESS,
  CREATE_SESSION_FAILURE,

  UPDATE_SESSION_REQUEST,
  UPDATE_SESSION_FAILURE,
  UPDATE_SESSION_SUCCESS,

  CREATE_WORKOUT_REQUEST,
  CREATE_WORKOUT_SUCCESS,
  CREATE_WORKOUT_FAILURE
} from '../actions/actionTypes'
import { workoutReducer } from './workoutReducer';

const sessionDefaultState = {
  name: null,
  startTime: null,
  workouts: []
}

export const sessionsReducer = (state = sessionDefaultState, action) => {
  switch (action.type) {
    case CREATE_SESSION_REQUEST:
      return state;
    case CREATE_WORKOUT_REQUEST:
    case CREATE_WORKOUT_SUCCESS:
    case CREATE_WORKOUT_FAILURE:
      return Object.assign({}, state, { workouts: workoutReducer(state.workouts, action) })

    case UPDATE_SESSION_REQUEST:
      return state;
    case UPDATE_SESSION_SUCCESS:
    return Object.assign({}, state, action.payload)
    case UPDATE_SESSION_FAILURE:
      return state;

    case CREATE_SESSION_SUCCESS:
      return Object.assign({}, state, action.payload)
    case CREATE_SESSION_FAILURE:
      return state;
    default:
      return state
  }
}
