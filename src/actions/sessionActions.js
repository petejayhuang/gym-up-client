import axios from 'axios'
import {
  CREATE_SESSION_REQUEST,
  CREATE_SESSION_SUCCESS,
  CREATE_SESSION_FAILURE
} from './actionTypes'

// SEND CREATE SESSION
export const createSession = (currentSession) => {
  return (dispatch) => {
    dispatch(createSessionRequest())
    
    const data = currentSession

    return axios({
      method: 'POST',
      url: 'https://gym-up-server.herokuapp.com/api/v1/session/sessionmaster',
      data: JSON.stringify(data)
    })
      .then((response) => dispatch(createSessionSuccess(response.data)))
      .catch((error) => dispatch(createSessionFailure(error)))
  }
}
const createSessionRequest = () => {
  return {
    type: CREATE_SESSION_REQUEST
  }
}
const createSessionSuccess = (payload) => {
  return {
    type: CREATE_SESSION_SUCCESS,
    payload
  }
}
const createSessionFailure = (error) => {
  return {
    type: CREATE_SESSION_FAILURE,
    error
  }
}