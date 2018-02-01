// Libraries
import { combineReducers } from "redux";

// Reducers
import textInput from "./textInput";
import analytics from "./analytics";
import user from "./user";
import exercises from "./exercise";
import request from "./request";
import session from "./session";
import sessions from "./sessions";
import errors from "./errors";

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_SUCCESS") {
    state = {};
  }
  return reducers(state, action);
};

const reducers = combineReducers({
  analytics: combineReducers({
    sessions: analytics,
    workouts: analytics
  }),
  errors,
  registerForm: textInput,
  currentSession: session,
  user,
  exercises,
  request,
  sessions
});

export default rootReducer;
