import axios from "axios";
import {
  FETCH_SESSIONS_REQUEST,
  FETCH_SESSIONS_SUCCESS,
  FETCH_SESSIONS_FAILURE,
  CREATE_SESSION_REQUEST,
  CREATE_SESSION_SUCCESS,
  CREATE_SESSION_FAILURE,
  UPDATE_SESSION_REQUEST,
  UPDATE_SESSION_SUCCESS,
  UPDATE_SESSION_FAILURE,
  DELETE_SESSION_REQUEST,
  DELETE_SESSION_SUCCESS,
  DELETE_SESSION_FAILURE
} from "./types";
import { API_ROOT_URL } from "../variables";

// Fetch sessions
export const fetchSessions = fakeSession => (dispatch, getState) => {
  dispatch(fetchSessionsRequest());

  axios(API_ROOT_URL)
    .then(response => response.json())
    .then(response => dispatch(fetchSessionsSuccess(response)))
    .catch(error => dispatch(fetchSessionsFailure(error)));
};

const fetchSessionsRequest = () => ({
  type: FETCH_SESSIONS_REQUEST,
  requesting: { requestingFetchSessions: true }
});
const fetchSessionsSuccess = allSessions => ({
  type: FETCH_SESSIONS_SUCCESS,
  requesting: { requestingFetchSessions: false },
  payload: allSessions
});
const fetchSessionsFailure = error => ({
  type: CREATE_SESSION_FAILURE,
  requesting: { requestingFetchSessions: false },
  error: { createSession: error }
});

//////////////////////////////////////////////////////
//                    CREATE SESSION                //
//////////////////////////////////////////////////////
export const createSession = currentSession => dispatch => {
  dispatch(createSessionRequest());
  return axios({
    method: "POST",
    url: "https://gym-up-server.herokuapp.com/api/v1/session/sessionmaster",
    data: JSON.stringify(currentSession)
  })
    .then(response => dispatch(createSessionSuccess(response.data)))
    .catch(error => dispatch(createSessionFailure(error)));
};

const newFakeSession = {
  startTime: "DD-MM-YYYY",
  name: "HIITS for life!",
  sessionMasterId: 12
};
const createSessionRequest = () => ({
  type: CREATE_SESSION_REQUEST,
  requesting: true
});
const createSessionSuccess = payload => ({
  type: CREATE_SESSION_SUCCESS,
  requesting: false,
  payload
});
const createSessionFailure = error => ({
  type: CREATE_SESSION_FAILURE,
  requesting: false,
  error
});

// Update Session
export const updateSession = updateSession => (dispatch, getState) => {
  dispatch(updateSessionRequest());
  const sessionMasterId = getState().currentSession.sessionMasterId;
  axios({
    method: "PUT",
    url: `${API_ROOT_URL}/session/sessionmaster/${sessionMasterId}`,
    data: JSON.stringify(updateSession)
  })
    .then(response => dispatch(updateSessionSuccess(response.data)))
    .catch(error => dispatch(updateSessionFailure(error)));
};
const updateSessionRequest = () => ({
  type: UPDATE_SESSION_REQUEST,
  requesting: true
});
const updateSessionSuccess = payload => ({
  type: UPDATE_SESSION_SUCCESS,
  requesting: false,
  payload
});
const updateSessionFailure = error => ({
  type: UPDATE_SESSION_FAILURE,
  requesting: false,
  error
});

// Delete Session
export const deleteSession = sessionId => dispatch => {
  dispatch(deleteSessionRequest());

  axios({
    method: "DELETE",
    url: `${API_ROOT_URL}/session/sessiondetail${sessionId}`,
    data
  })
    .then(response => dispatch(deleteSessionSuccess(response.data)))
    .catch(error => dispatch(deleteSessionFailure(error)));
};
const deleteSessionRequest = () => ({
  type: DELETE_SESSION_REQUEST,
  requesting: true
});
const deleteSessionSuccess = payload => ({
  type: DELETE_SESSION_SUCCESS,
  requesting: false,
  payload
});
const deleteSessionFailure = error => ({
  type: DELETE_SESSION_FAILURE,
  requesting: false,
  error
});
