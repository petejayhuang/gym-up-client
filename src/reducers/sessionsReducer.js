import { FETCH_SESSIONS_SUCCESS } from "../actions/actionTypes";

const initialState = [
  {
    sessionMasterId: 1,
    name: "Session 1",
    startTime: "DD-MM-YYYY HH:MM"
  },
  {
    sessionMasterId: 2,
    name: "Session 2",
    startTime: "DD-MM-YYYY HH:MM"
  },
  {
    sessionMasterId: 3,
    name: "Session 3",
    startTime: "DD-MM-YYYY HH:MM"
  },
  {
    sessionMasterId: 4,
    name: "Session 4",
    startTime: "DD-MM-YYYY HH:MM"
  }
];

const sessions = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SESSIONS_SUCCESS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default sessions;
