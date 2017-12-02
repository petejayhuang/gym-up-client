import axios from 'axios'
import {
  CREATE_WORKOUT_REQUEST,
  CREATE_WORKOUT_SUCCESS,
  CREATE_WORKOUT_FAILURE,

  UPDATE_WORKOUT_REQUEST,
  UPDATE_WORKOUT_SUCCESS,
  UPDATE_WORKOUT_FAILURE,

  DELETE_WORKOUT_REQUEST,
  DELETE_WORKOUT_SUCCESS,
  DELETE_WORKOUT_FAILURE
} from './actionTypes'

// Create Workout
export const createWorkout = currentWorkout => (dispatch, getState) => {
  const { sessionMasterId, workouts } = getState().currentSession
  const { exercises } = getState()

  dispatch(createWorkoutRequest())

  const currentExerciseName = exercises.find(exercise => exercise.workoutId === currentWorkout.workoutId).name

  const randomId = Math.floor(Math.random() * 10000)

  let fakeData = currentWorkout
  fakeData["name"] = currentExerciseName
  fakeData["sessionMasterId"] = sessionMasterId
  fakeData["order"] = workouts.length + 1
  fakeData["sessionDetailId"] = randomId

  // axios({
  //   method: 'POST',
  //   url: 'https://gym-up-server.herokuapp.com/api/v1/session/sessiondetail',
  //   data
  // })
  //   .then(response => dispatch(createWorkoutSuccess(response.data)))
  //   .catch(error => dispatch(createWorkoutFailure(error)))
  dispatch(createWorkoutSuccess(fakeData))
}

const createWorkoutRequest = () => ({
  type: CREATE_WORKOUT_REQUEST,
  requesting: true
})
// switch to payload
const createWorkoutSuccess = payload => ({
  type: CREATE_WORKOUT_SUCCESS,
  requesting: false,
  payload
})
const createWorkoutFailure = error => ({
  type: CREATE_WORKOUT_FAILURE,
  requesting: false,
  error
})

// Update Workout
export const updateWorkout = (updatedWorkout, workoutId) => dispatch => {
  dispatch(updateWorkoutRequest())

  axios({
    method: 'PUT',
    url: `https://gym-up-server.herokuapp.com/api/v1/session/sessiondetail${workoutId}`,
    data
  })
    .then(response => dispatch(updateWorkoutSuccess(response.data)))
    .catch(error => dispatch(updateWorkoutFailure(error)))
}
const updateWorkoutRequest = () => ({
  type: UPDATE_WORKOUT_REQUEST,
  requesting: true
})
const updateWorkoutSuccess = payload => ({
  type: UPDATE_WORKOUT_SUCCESS,
  requesting: false,
  payload,
})
const updateWorkoutFailure = error => ({
  type: UPDATE_WORKOUT_FAILURE,
  requesting: false,
  error
})

// Delete Workout
// TBC - Not in action yet
export const deleteWorkout = workoutId => dispatch => {
  dispatch(deleteWorkoutRequest())

  axios({
    method: 'DELETE',
    url: `https://gym-up-server.herokuapp.com/api/v1/session/sessiondetail${workoutId}`
  })
    .then(response => dispatch(deleteWorkoutSuccess(response.data)))
    .catch(error => dispatch(deleteWorkoutFailure(error)))
}
const deleteWorkoutRequest = () => ({
  type: DELETE_WORKOUT_REQUEST,
  requesting: true
})
const deleteWorkoutSuccess = payload => ({
  type: DELETE_WORKOUT_SUCCESS,
  requesting: false,
  payload,
})
const deleteWorkoutFailure = error => ({
  type: DELETE_WORKOUT_FAILURE,
  requesting: false,
  error
})

