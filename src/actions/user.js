import axios from "axios";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE
} from "./types";
import { API_ROOT_URL } from "../variables";

//////////////////////////////////////////////////////
//                    CREATE USER                   //
//////////////////////////////////////////////////////
const fakeUser = {
  firstName: "Peter",
  lastName: "Huang",
  username: "petehuang",
  email: "petejayhuang@asdasd.com",
  password: "13123"
};
export const createUser = registerForm => (dispatch, getState) => {
  dispatch(createUserRequest());
  const data = registerForm; // {};
  // data.user = registerForm;
  console.log(" user.js action | registerForm before it is sent", data);
  axios({
    method: "POST",
    url: `${API_ROOT_URL}/auth/signup`,
    data
  })
    .then(response => {
      dispatch(createUserSuccess(response.data.user));
      // dispatch(createUserSuccess(fakeUser));
    })
    .catch(
      error => dispatch(createUserFailure(error))
      // dispatch(createUserSuccess(fakeUser))
    );
};
const createUserRequest = () => ({
  type: CREATE_USER_REQUEST,
  requesting: true
});
const createUserSuccess = createdUser => ({
  type: CREATE_USER_SUCCESS,
  requesting: false,
  payload: createdUser
});
const createUserFailure = error => ({
  type: CREATE_USER_FAILURE,
  requesting: false,
  error
});

//////////////////////////////////////////////////////
//                    FETCH USER                    //
//////////////////////////////////////////////////////
export const fetchUser = registerForm => (dispatch, getState) => {
  dispatch(fetchUserRequest());
  const token = getState().user.token;
  return axios({
    type: "get",
    headers: { "X-Access-Token": token },
    url: `${API_ROOT_URL}/auth/me`
  })
    .then(response => {
      dispatch(fetchUserSuccess(response.data));
    })
    .catch(error => dispatch(fetchUserFailure(error)));
};
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

//////////////////////////////////////////////////////
//                 LOG IN/OUT USER                  //
//////////////////////////////////////////////////////
const fakeUserLogin = {
  firstName: "Peter",
  lastName: "Huang",
  username: "petehuang",
  email: "petejayhuang@asdasd.com",
  password: "13123",
  loggedIn: true
};
export const loginUser = loginForm => (dispatch, getState) => {
  dispatch(loginUserRequest());
  axios({
    method: "POST",
    url: `${API_ROOT_URL}/auth/login`,
    data: loginForm
  })
    .then(response => {
      dispatch(loginUserSuccess(response.data.user));
      // dispatch(loginUserSuccess(fakeUserLogin));
    })
    .catch(error => {
      dispatch(loginUserFailure(error));
      // dispatch(loginUserSuccess(fakeUserLogin));
    });
};
const loginUserRequest = () => ({
  type: LOGIN_USER_REQUEST,
  requesting: true
});
const loginUserSuccess = loginForm => ({
  type: LOGIN_USER_SUCCESS,
  requesting: false,
  payload: loginForm
});
const loginUserFailure = error => ({
  type: LOGIN_USER_FAILURE,
  requesting: false,
  error
});
export const logOut = () => ({
  type: LOGOUT_SUCCESS
});

//////////////////////////////////////////////////////
//                    DELETE USER                   //
//////////////////////////////////////////////////////
export const deleteUser = () => (dispatch, getState) => {
  dispatch(deleteUserRequest());
  const USER_ID = getState().user.userId;
  return axios
    .delete(`${API_ROOT_URL}/user/${USER_ID}/destroy`)
    .then(response => dispatch(deleteUserSuccess(response)))
    .catch(error => dispatch(deleteUserFailure(error)));
};
const deleteUserRequest = () => ({
  type: DELETE_USER_REQUEST,
  requesting: true
});
const deleteUserSuccess = () => ({
  type: DELETE_USER_SUCCESS,
  requesting: false
});
const deleteUserFailure = error => ({
  type: DELETE_USER_FAILURE,
  requesting: false,
  error
});

//////////////////////////////////////////////////////
//                    UPDATE USER                   //
//////////////////////////////////////////////////////
export const updateUser = () => (dispatch, getState) => {
  dispatch(updateUserRequest());
  const USER_ID = getState().user.userId;
  const FORM = getState().registerForm;
  return axios({
    method: "PUT",
    url: `${API_ROOT_URL}/user/${USER_ID}`,
    data: FORM
  })
    .then(response => dispatch(updateUserSuccess(response.data)))
    .catch(error => dispatch(updateUserFailure(error)));
};
const updateUserRequest = () => ({
  type: UPDATE_USER_REQUEST,
  requesting: true
});
const updateUserSuccess = updatedUser => ({
  type: UPDATE_USER_SUCCESS,
  requesting: false,
  payload: updatedUser
});
const updateUserFailure = error => ({
  type: UPDATE_USER_FAILURE,
  requesting: true,
  error
});
