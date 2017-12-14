import axios from "axios";
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
} from "./actionTypes";
import { API_ROOT_URL } from "../variables";

// SEND REGISTER FORM
export function createUser(registerForm) {
  return (dispatch, getState) => {
    dispatch(createUserRequest());

    return axios({
      method: "POST",
      url: `${API_ROOT_URL}/auth/register`,
      data: registerForm
    })
      .then(response => {
        dispatch(createUserSuccess(response.data));
      })
      .catch(error => dispatch(createUserFailure(error)));
  };
}
function createUserRequest() {
  return {
    type: CREATE_USER_REQUEST,
    requesting: true
  };
}
function createUserSuccess(createdUser) {
  return {
    type: CREATE_USER_SUCCESS,
    requesting: false,
    payload: createdUser
  };
}
function createUserFailure(error) {
  return {
    type: CREATE_USER_FAILURE,
    requesting: false,
    error: error
  };
}

// User Login
export const logOut = () => ({
  type: LOGOUT_SUCCESS
});

// Fetch User
export function fetchUser(registerForm) {
  return (dispatch, getState) => {
    dispatch(fetchUserRequest());
    const token = getState().user.token;

    axios({
      type: "get",
      headers: { "X-Access-Token": token },
      url: `${API_ROOT_URL}/auth/me`
    })
      .then(response => {
        dispatch(fetchUserSuccess(response.data));
      })
      .catch(error => dispatch(fetchUserFailure(error)));
  };
}
const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST,
  requesting: true
});
const fetchUserSuccess = fetchedUser => ({
  type: FETCH_USER_SUCCESS,
  requesting: false,
  payload: fetchedUser
});
const fetchUserFailure = error => ({
  type: FETCH_USER_FAILURE,
  requesting: false,
  error
});

// DELETE USER
export function deleteUser() {
  return (dispatch, getState) => {
    dispatch(deleteUserRequest());

    const USER_ID = getState().user.userId;

    axios
      .delete(`${API_ROOT_URL}/user/${USER_ID}/destroy`)
      .then(response => dispatch(deleteUserSuccess(response)))
      .catch(error => dispatch(deleteUserFailure(error)));
  };
}
const deleteUserRequest = () => ({
  type: DELETE_USER_REQUEST,
  requesting: { requestingDeleteUser: true }
});

const deleteUserSuccess = () => ({
  type: DELETE_USER_SUCCESS,
  requesting: { requestingDeleteUser: false }
});

const deleteUserFailure = error => ({
  type: DELETE_USER_FAILURE,
  requesting: { requestingDeleteUser: false },
  error: { deleteUser: error }
});

// UPDATE USER
export function updateUser() {
  return (dispatch, getState) => {
    dispatch(updateUserRequest());

    const USER_ID = getState().user.userId;
    const FORM = getState().registerForm;

    axios({
      method: "PUT",
      url: `${API_ROOT_URL}/user/${USER_ID}`,
      data: FORM
    })
      .then(response => dispatch(updateUserSuccess(response.data)))
      .catch(error => dispatch(updateUserFailure(error)));
  };
}

const updateUserRequest = () => ({
  type: UPDATE_USER_REQUEST,
  requesting: { requestingUpdateUser: true }
});

const updateUserSuccess = updatedUser => ({
  type: UPDATE_USER_SUCCESS,
  requesting: { requestingUpdateUser: false },
  payload: updatedUser
});

const updateUserFailure = error => ({
  type: UPDATE_USER_FAILURE,
  requesting: { requestingUpdateUser: false },
  error: { updateUser: error }
});
