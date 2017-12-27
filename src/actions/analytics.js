import axios from "axios";

import {
  ANALYTICS_SESSIONS_REQUEST,
  ANALYTICS_SESSIONS_SUCCESS,
  ANALYTICS_SESSIONS_FAILURE,
  ANALYTICS_WORKOUTS_REQUEST,
  ANALYTICS_WORKOUTS_SUCCESS,
  ANALYTICS_WORKOUTS_FAILURE
} from "./types";

import { bicepCurlData } from "../sampleData";

import { TEST_API_ROOT_URL } from "../variables";

export const analyticsSessions = () => dispatch => {
  dispatch(analyticsSessionsRequest());
  axios({
    method: "post",
    url: `${TEST_API_ROOT_URL}/analytics/sessions`,
    data: {
      userId: 1
    }
  })
    .then(response => dispatch(analyticsSessionsSuccess(response.data)))
    .catch(error => dispatch(analyticsSessionsFailure(error)));
};
const analyticsSessionsRequest = () => ({
  type: ANALYTICS_SESSIONS_REQUEST,
  request: { requestingAnalyticsSessions: true }
});
const analyticsSessionsSuccess = payload => ({
  type: ANALYTICS_SESSIONS_SUCCESS,
  request: { requestingAnalyticsSessions: false },
  payload
});
const analyticsSessionsFailure = error => ({
  type: ANALYTICS_SESSIONS_FAILURE,
  request: { requestingAnalyticsSessions: false },
  error
});

// Workouts
export const analyticsWorkouts = () => dispatch => {
  // const workoutId = 11;
  // dispatch(analyticsWorkoutsRequest());
  // axios({
  //   method: "post",
  //   url: `${TEST_API_ROOT_URL}/analytics/workouts`,
  //   data: { workoutId, userId: 1 }
  // })
  //   .then(response => response.data)
  //   .then(response => {
  //     const finalObject = {};

  //     const finalArray = response.reduce((acc, item) => {
  //       const tempObject = {};
  //       tempObject["start"] = item.start.slice(0, 10);
  //       tempObject["weight"] = item.sessionDetails[0].weight;
  //       tempObject["reps"] = item.sessionDetails[0].reps;
  //       tempObject["sets"] = item.sessionDetails[0].sets;
  //       return acc.concat(tempObject);
  //     }, []);

  //     finalObject[workoutId] = finalArray;
  //     return dispatch(analyticsWorkoutsSuccess(finalObject));
  //   })
  //   .catch(error => dispatch(analyticsWorkoutsFailure(error)));
  dispatch(analyticsWorkoutsSuccess(bicepCurlData));
};
const analyticsWorkoutsRequest = () => ({
  type: ANALYTICS_WORKOUTS_REQUEST,
  request: { requestingAnalyticsSessions: true }
});
const analyticsWorkoutsSuccess = bicepCurlData => ({
  type: ANALYTICS_WORKOUTS_SUCCESS,
  request: { requestingAnalyticsWorkouts: false },
  payload: bicepCurlData
});
const analyticsWorkoutsFailure = error => ({
  type: ANALYTICS_WORKOUTS_FAILURE,
  request: { requestingAnalyticsWorkouts: false },
  error
});
