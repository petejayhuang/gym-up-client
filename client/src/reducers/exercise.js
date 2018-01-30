import {
  LOOKUP_EXERCISES_REQUEST,
  LOOKUP_EXERCISES_SUCCESS,
  LOOKUP_EXERCISES_FAILURE
} from "../actions/types";

const exercise = (state = [], action) => {
  switch (action.type) {
    case LOOKUP_EXERCISES_REQUEST:
      return state;
    case LOOKUP_EXERCISES_SUCCESS:
      return [...state, ...action.payload];
    case LOOKUP_EXERCISES_FAILURE:
      return state;
    default:
      return state;
  }
};

export default exercise;
