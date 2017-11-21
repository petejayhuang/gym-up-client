import axios from 'axios'

import {
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

    const ROOT_URL = 'https://gym-up-server.herokuapp.com/api/v1/user/create'
    const registerForm = getState().registerForm;

    return axios({
      method: 'POST',
      url: ROOT_URL,
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
    type: CREATE_USER_REQUEST
  }
}

function createUserSuccess(createdUser) {
  return {
    type: CREATE_USER_SUCCESS,
    payload: createdUser
  }
}

function createUserFailure(error) {
  return {
    type: CREATE_USER_FAILURE,
    error: error
  }
}

// DELETE USER
export function deleteUser() {
  return (dispatch, getState) => {
    dispatch(deleteUserRequest())

    const USER_ID = getState().user.userId;
    const ROOT_URL = `https://gym-up-server.herokuapp.com/api/v1/user/${USER_ID}/destroy`

    return axios(ROOT_URL)
      .then(response => dispatch(deleteUserSuccess(response)))
      .catch(error => dispatch(deleteUserFailure(error)))
  }
}

function deleteUserRequest() {
  return {
    type: DELETE_USER_REQUEST
  }
}

function deleteUserSuccess() {
  return {
    type: DELETE_USER_SUCCESS,
  }
}

function deleteUserFailure(error) {
  return {
    type: DELETE_USER_FAILURE,
  }
}

// UPDATE USER
export function updateUser() {
  return (dispatch, getState) => {
    dispatch(updateUserRequest())

    const USER_ID = getState().user.userId;
    const FORM = getState().registerForm;
    const ROOT_URL = `https://gym-up-server.herokuapp.com/api/v1/user/${USER_ID}/update`

    console.log("before update, the form is:", FORM)

    return axios({
      method: 'PUT',
      url: ROOT_URL,
      data: FORM
    })
      .then(response => {
        console.log("response", response)
        dispatch(updateUserSuccess(response))
      })
      .catch(error => dispatch(updateUserFailure(error)))
  }
}

function updateUserRequest() {
  return {
    type: UPDATE_USER_REQUEST
  }
}

function updateUserSuccess(updatedUser) {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: updatedUser
  }
}

function updateUserFailure(error) {
  return {
    type: UPDATE_USER_FAILURE,
    error
  }
}