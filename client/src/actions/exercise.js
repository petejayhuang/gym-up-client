import axios from "axios";
import {
  LOOKUP_EXERCISES_REQUEST,
  LOOKUP_EXERCISES_SUCCESS,
  LOOKUP_EXERCISES_FAILURE
} from "./types";

import { API_ROOT_URL } from "../variables";

export const lookupExercises = () => dispatch => {
  dispatch(lookupExercisesRequest());

  axios(`${API_ROOT_URL}/workouts`)
    .then(response => dispatch(lookupExercisesSuccess(response.data.workouts)))
    .catch(error => dispatch(lookupExercisesFailure(error)));
};
const lookupExercisesRequest = () => {
  return {
    type: LOOKUP_EXERCISES_REQUEST,
    requesting: true
  };
};
const lookupExercisesSuccess = payload => {
  return {
    type: LOOKUP_EXERCISES_SUCCESS,
    requesting: false,
    payload
  };
};
const lookupExercisesFailure = error => {
  return {
    type: LOOKUP_EXERCISES_FAILURE,
    requesting: false,
    error
  };
};
