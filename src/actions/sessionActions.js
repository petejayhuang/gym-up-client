import axios from 'axios'
import {
  CREATE_SESSION_REQUEST,
  CREATE_SESSION_SUCCESS,
  CREATE_SESSION_FAILURE,

  UPDATE_SESSION_REQUEST,
  UPDATE_SESSION_SUCCESS,
  UPDATE_SESSION_FAILURE,

  DELETE_SESSION_REQUEST,
  DELETE_SESSION_SUCCESS,
  DELETE_SESSION_FAILURE
} from './actionTypes'

// Create Session
export const createSession = currentSession => dispatch => {
  dispatch(createSessionRequest())

  // axios({
  //   method: 'POST',
  //   url: 'https://gym-up-server.herokuapp.com/api/v1/session/sessionmaster',
  //   data: JSON.stringify(currentSession)
  // })
  //   .then((response) => dispatch(createSessionSuccess(response.data)))
  //   .catch((error) => dispatch(createSessionFailure(error)))

  dispatch(createSessionSuccess(newFakeSession))
}

const newFakeSession = {
  startTime: "DD-MM-YYYY",
  name: "HIITS for life!",
  sessionMasterId: 12
}
const createSessionRequest = () => ({
  type: CREATE_SESSION_REQUEST,
  requesting: true
})
const createSessionSuccess = payload => ({
  type: CREATE_SESSION_SUCCESS,
  requesting: false,
  payload
})
const createSessionFailure = error => ({
  type: CREATE_SESSION_FAILURE,
  requesting: false,
  error
})

// Update Session
export const updateSession = updateSession => (dispatch, getState) => {
  dispatch(updateSessionRequest())
  const sessionMasterId = getState().currentSession.sessionMasterId
  axios({
    method: 'PUT',
    url: `https://gym-up-server.herokuapp.com/api/v1/session/sessionmaster/${sessionMasterId}`,
    data: JSON.stringify(updateSession)
  })
    .then((response) => dispatch(updateSessionSuccess(response.data)))
    .catch((error) => dispatch(updateSessionFailure(error)))
}
const updateSessionRequest = () => ({
  type: UPDATE_SESSION_REQUEST,
  requesting: true
})
const updateSessionSuccess = payload => ({
  type: UPDATE_SESSION_SUCCESS,
  requesting: false,
  payload
})
const updateSessionFailure = error => ({
  type: UPDATE_SESSION_FAILURE,
  requesting: false,
  error
})

// Delete Session
export const deleteSession = sessionId => dispatch => {
  dispatch(deleteSessionRequest())

  axios({
    method: 'DELETE',
    url: `https://gym-up-server.herokuapp.com/api/v1/session/sessiondetail${sessionId}`,
    data
  })
    .then(response => dispatch(deleteSessionSuccess(response.data)))
    .catch(error => dispatch(deleteSessionFailure(error)))
}
const deleteSessionRequest = () => ({
  type: DELETE_SESSION_REQUEST,
  requesting: true
})
const deleteSessionSuccess = payload => ({
  type: DELETE_SESSION_SUCCESS,
  requesting: false,
  payload,
})
const deleteSessionFailure = error => ({
  type: DELETE_SESSION_FAILURE,
  requesting: false,
  error
})

