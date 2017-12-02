import {
  CREATE_SESSION_SUCCESS,
  UPDATE_SESSION_SUCCESS,
  DELETE_SESSION_SUCCESS,

  CREATE_WORKOUT_SUCCESS
} from '../actions/actionTypes'
import { workoutReducer } from './workoutReducer';

const sessionDefaultState = {
  name: null,
  startTime: null,
  workouts: []
}

export const sessionsReducer = (state = sessionDefaultState, action) => {
  switch (action.type) {
    case CREATE_SESSION_SUCCESS:
      return Object.assign({}, state, action.payload)

    case UPDATE_SESSION_SUCCESS:
      return Object.assign({}, state, action.payload)

    case DELETE_SESSION_SUCCESS:
      return state

    case CREATE_WORKOUT_SUCCESS:
      return Object.assign({}, state, { workouts: workoutReducer(state.workouts, action) })

    default:
      return state
  }
}
