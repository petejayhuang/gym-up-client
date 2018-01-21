import {
  FETCH_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  CREATE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  DELETE_USER_SUCCESS
} from "../actions/types";

const user = (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return Object.assign({}, state, action.payload, { loggedIn: true });
    case FETCH_USER_SUCCESS:
      return Object.assign({}, state, action.payload, { loggedIn: true });
    case UPDATE_USER_SUCCESS:
      return Object.assign({}, state, action.payload, { loggedIn: true });
    case DELETE_USER_SUCCESS:
      return {};
    case LOGIN_USER_SUCCESS:
      return Object.assign({}, state, action.payload, { loggedIn: true });
    default:
      return state;
  }
};

export default user;
