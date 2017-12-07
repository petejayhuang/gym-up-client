import axios from 'axios'
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,

  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,

  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,

  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE
} from './actionTypes'

// SEND REGISTER FORM
export function createUser(registerForm) {
  return (dispatch, getState) => {
    dispatch(createUserRequest())

    return axios({
      method: 'POST',
      url: 'https://gym-up-server.herokuapp.com/api/v1/auth/register',
      data: registerForm
    })
      .then(response => {
        dispatch(createUserSuccess(response.data))
      })
      .catch(error => dispatch(createUserFailure(error)))
  }
}
function createUserRequest() {
  return {
    type: CREATE_USER_REQUEST,
    requesting: true,
  }
}
function createUserSuccess(createdUser) {
  return {
    type: CREATE_USER_SUCCESS,
    requesting: false,
    payload: createdUser
  }
}
function createUserFailure(error) {
  return {
    type: CREATE_USER_FAILURE,
    requesting: false,
    error: error
  }
}

// User Login
export const logOut = () => ({
  type: LOGOUT_SUCCESS
})

// Fetch User
export function fetchUser(registerForm) {
  return (dispatch, getState) => {
    dispatch(fetchUserRequest())
    const token = getState().user.token

    axios({
      type: 'get',
      headers: { 'X-Access-Token': token },
      url: 'https://gym-up-server.herokuapp.com/api/v1/auth/me'
    })


      .then(response => { dispatch(fetchUserSuccess(response.data)) })
      .catch(error => dispatch(fetchUserFailure(error)))
  }
}
const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST,
  requesting: true
})
const fetchUserSuccess = fetchedUser => ({
  type: FETCH_USER_SUCCESS,
  requesting: false,
  payload: fetchedUser
})
const fetchUserFailure = error => ({
  type: FETCH_USER_FAILURE,
  requesting: false,
  error
})
// DELETE USER
export function deleteUser() {
  return (dispatch, getState) => {
    dispatch(deleteUserRequest())

    const USER_ID = getState().user.userId

    return axios.delete(
      `https://gym-up-server.herokuapp.com/api/v1/user/${USER_ID}/destroy`
    )
      .then(response => dispatch(deleteUserSuccess(response)))
      .catch(error => dispatch(deleteUserFailure(error)))
  }
}
function deleteUserRequest() {
  return {
    type: DELETE_USER_REQUEST,
    requesting: true
  }
}
function deleteUserSuccess() {
  return {
    type: DELETE_USER_SUCCESS,
    requesting: false
  }
}
function deleteUserFailure(error) {
  return {
    type: DELETE_USER_FAILURE,
    requesting: false,
    error
  }
}

// UPDATE USER
export function updateUser() {
  return (dispatch, getState) => {
    dispatch(updateUserRequest())

    const USER_ID = getState().user.userId
    const FORM = getState().registerForm

    return axios({
      method: 'PUT',
      url: `https://gym-up-server.herokuapp.com/api/v1/user/${USER_ID}`,
      data: FORM
    })
      .then(response => { dispatch(updateUserSuccess(response.data)) })
      .catch(error => dispatch(updateUserFailure(error)))
  }
}

function updateUserRequest() {
  return {
    type: UPDATE_USER_REQUEST,
    requesting: true
  }
}

function updateUserSuccess(updatedUser) {
  return {
    type: UPDATE_USER_SUCCESS,
    requesting: false,
    payload: updatedUser
  }
}

function updateUserFailure(error) {
  return {
    type: UPDATE_USER_FAILURE,
    requesting: false,
    error
  }
}