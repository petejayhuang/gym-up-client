import axios from 'axios'
import {
  CREATE_WORKOUT_REQUEST,
  CREATE_WORKOUT_SUCCESS,
  CREATE_WORKOUT_FAILURE
} from './actionTypes'

export const createWorkout = (currentWorkout) => {

  return (dispatch, getState) => {

    const sessionMasterId = getState().currentSession.sessionMasterId
    const workouts = getState().currentSession.workouts

    dispatch(createWorkoutRequest())

    let data = currentWorkout;
    data["sessionMasterId"] = sessionMasterId
    data["workoutOrder"] = workouts.length + 1


    console.log("this is the workout body before request", data)
    axios({
      method: 'POST',
      url: 'https://gym-up-server.herokuapp.com/api/v1/session/sessiondetail',
      data
    })
      .then((response) => dispatch(createWorkoutSuccess(response.data)))
      .catch((error) => dispatch(createWorkoutFailure(error)))
  }
}
const createWorkoutRequest = () => {
  return {
    type: CREATE_WORKOUT_REQUEST
  }
}
const createWorkoutSuccess = (payload) => {
  return {
    type: CREATE_WORKOUT_SUCCESS,
    payload,
  }
}
const createWorkoutFailure = (error) => {
  return {
    type: CREATE_WORKOUT_FAILURE,
    error
  }
}