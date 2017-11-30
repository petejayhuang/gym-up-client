import axios from 'axios'
import {
  CREATE_SESSION_REQUEST,
  CREATE_SESSION_SUCCESS,
  CREATE_SESSION_FAILURE,

  UPDATE_SESSION_REQUEST,
  UPDATE_SESSION_SUCCESS,
  UPDATE_SESSION_FAILURE
} from './actionTypes'

// SEND CREATE SESSION
export const createSession = currentSession => dispatch => {
  dispatch(createSessionRequest())

  axios({
    method: 'POST',
    url: 'https://gym-up-server.herokuapp.com/api/v1/session/sessionmaster',
    data: JSON.stringify(currentSession)
  })
    .then((response) => dispatch(createSessionSuccess(response.data)))
    .catch((error) => dispatch(createSessionFailure(error)))
}

const createSessionRequest = () => ({
  type: CREATE_SESSION_REQUEST
})
const createSessionSuccess = payload => ({
  type: CREATE_SESSION_SUCCESS,
  payload
})
const createSessionFailure = error => ({
  type: CREATE_SESSION_FAILURE,
  error
})

// SEND EDIT SESSION
export const editSession = editSession => (dispatch, getState) => {
  dispatch(editSessionRequest())
  const sessionMasterId = getState().currentSession.sessionMasterId
  axios({
    method: 'PUT',
    url: `https://gym-up-server.herokuapp.com/api/v1/session/sessionmaster/${sessionMasterId}`,
    data: JSON.stringify(editSession)
  })
    .then((response) => dispatch(editSessionSuccess(response.data)))
    .catch((error) => dispatch(editSessionFailure(error)))
}
const editSessionRequest = () => ({
  type: UPDATE_SESSION_REQUEST
})
const editSessionSuccess = payload => ({
  type: UPDATE_SESSION_SUCCESS,
  payload
})
const editSessionFailure = error => ({
  type: UPDATE_SESSION_FAILURE,
  error
})
