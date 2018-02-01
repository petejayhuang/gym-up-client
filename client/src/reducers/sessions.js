import { FETCH_SESSIONS_SUCCESS } from "../actions/types";

const initialState = [];

const sessions = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SESSIONS_SUCCESS:
      const tempArray = [];
      return tempArray.concat(action.payload);
    default:
      return state;
  }
};

export default sessions;
