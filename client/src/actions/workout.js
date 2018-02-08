import axios from "axios";
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
} from "./types";
import { API_ROOT_URL } from "../variables";

// Create Workout
export const createWorkout = currentWorkout => (dispatch, getState) => {
  const { id, workouts } = getState().currentSession;
  dispatch(createWorkoutRequest());

  const data = Object.assign({}, currentWorkout);
  data["workoutOrder"] = workouts.length + 1;

  console.log("workout before it goes out", data);
  axios({
    method: "POST",
    withCredentials: true,
    url: `${API_ROOT_URL}/sessions/${id}`,
    data
  })
    .then(response =>
      dispatch(createWorkoutSuccess(response.data.sessionDetail))
    )
    .catch(error => dispatch(createWorkoutFailure(error)));
};

const createWorkoutRequest = () => ({
  type: CREATE_WORKOUT_REQUEST,
  requesting: true
});
// switch to payload
const createWorkoutSuccess = payload => ({
  type: CREATE_WORKOUT_SUCCESS,
  requesting: false,
  payload
});
const createWorkoutFailure = error => ({
  type: CREATE_WORKOUT_FAILURE,
  requesting: false,
  error
});

// Update Workout
export const updateWorkout = (
  updatedWorkout,
  sessionMasterId,
  id
) => dispatch => {
  dispatch(updateWorkoutRequest());

  const data = Object.assign({}, updatedWorkout);

  axios({
    method: "PUT",
    url: `${API_ROOT_URL}/sessions/${sessionMasterId}/${id}`,
    withCredentials: true,
    data
  })
    .then(response =>
      dispatch(updateWorkoutSuccess(response.data.sessionDetail))
    )
    .catch(error => dispatch(updateWorkoutFailure(error)));
};
const updateWorkoutRequest = () => ({
  type: UPDATE_WORKOUT_REQUEST,
  requesting: true
});
const updateWorkoutSuccess = payload => ({
  type: UPDATE_WORKOUT_SUCCESS,
  requesting: false,
  payload
});
const updateWorkoutFailure = error => ({
  type: UPDATE_WORKOUT_FAILURE,
  requesting: false,
  error
});


export const deleteWorkout = (sessionMasterId, workoutId) => dispatch => {
  dispatch(deleteWorkoutRequest());

  axios({
    method: "DELETE",
    url: `${API_ROOT_URL}/sessions/${sessionMasterId}/${workoutId}`,
    withCredentials: true
  })
    .then(response => dispatch(deleteWorkoutSuccess(response)))
    .catch(error => dispatch(deleteWorkoutFailure(error)));
};
const deleteWorkoutRequest = () => ({
  type: DELETE_WORKOUT_REQUEST,
  requesting: true
});
const deleteWorkoutSuccess = payload => ({
  type: DELETE_WORKOUT_SUCCESS,
  requesting: false,
  payload
});
const deleteWorkoutFailure = error => ({
  type: DELETE_WORKOUT_FAILURE,
  requesting: false,
  error
});
