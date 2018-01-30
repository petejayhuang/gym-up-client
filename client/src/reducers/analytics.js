import {
  ANALYTICS_SESSIONS_SUCCESS,
  ANALYTICS_WORKOUTS_SUCCESS
} from "../actions/types";

const analytics = (state = [], action) => {
  switch (action.type) {
    case ANALYTICS_SESSIONS_SUCCESS:
      const newState = [...action.payload];
      return newState.reduce((accumulator, current) => {
        let tempObject = {};
        tempObject["start"] = current.start.slice(0, 10);
        tempObject["intensity"] = current.intensity;
        return accumulator.concat(tempObject);
      }, []);
    // somehow the above reducer is running as well
    case ANALYTICS_WORKOUTS_SUCCESS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default analytics;
