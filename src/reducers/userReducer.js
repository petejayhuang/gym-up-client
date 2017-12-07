import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,

  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,

  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,

  DELETE_USER_SUCCESS
} from '../actions/actionTypes'

export default function createUser(state = {}, action) {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return state;
    case FETCH_USER_SUCCESS:
      return action.payload;
    case FETCH_USER_FAILURE:
      return state;
    case CREATE_USER_REQUEST:
      return state
    case CREATE_USER_SUCCESS:
      return Object.assign({}, state, action.payload)
    case UPDATE_USER_REQUEST:
      return state
    case UPDATE_USER_SUCCESS:
      return Object.assign({}, state, action.payload)
    case UPDATE_USER_FAILURE:
      return state
    case DELETE_USER_SUCCESS:
      return {}
    default:
      return state
  }
}