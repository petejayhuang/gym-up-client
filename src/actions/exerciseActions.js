import axios from "axios";
import {
  LOOKUP_EXERCISES_REQUEST,
  LOOKUP_EXERCISES_SUCCESS,
  LOOKUP_EXERCISES_FAILURE
} from "./actionTypes";

import { API_ROOT_URL } from "../variables";

export const lookupExercises = () => dispatch => {
  dispatch(lookupExercisesRequest());

  axios(`${API_ROOT_URL}/workout`)
    .then(response => dispatch(lookupExercisesSuccess(response.data)))
    .catch(error => dispatch(lookupExercisesFailure(error)));
};
const lookupExercisesRequest = () => {
  return {
    type: LOOKUP_EXERCISES_REQUEST
  };
};
const lookupExercisesSuccess = payload => {
  return {
    type: LOOKUP_EXERCISES_SUCCESS,
    payload
  };
};
const lookupExercisesFailure = error => {
  return {
    type: LOOKUP_EXERCISES_FAILURE,
    error
  };
};
