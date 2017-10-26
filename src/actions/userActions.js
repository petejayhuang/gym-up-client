import axios from 'axios';

import {
  SEND_REGISTER_FORM_REQUEST,
  SEND_REGISTER_FORM_SUCCESS,
  SEND_REGISTER_FORM_FAILURE
} from './actionTypes'

export function sendRegisterForm(registerForm) {
  return dispatch => {
    dispatch(sendRegisterFormRequest());
    const ROOT_URL = 'https://gym-up-server.herokuapp.com/api/v1/users/create';
    axios({
      method: 'post',
      url: ROOT_URL,
      data: registerForm
    })
      .then(response => sendRegisterFormSuccess())
      .catch(error => sendRegisterFormFailure(error))
  }
}

export function sendRegisterFormRequest() {
  return {
    type: SEND_REGISTER_FORM_REQUEST
  }
}

export function sendRegisterFormSuccess() {
  return {
    type: SEND_REGISTER_FORM_SUCCESS
  }
}

export function sendRegisterFormFailure(error) {
  return {
    type: SEND_REGISTER_FORM_FAILURE,
    error: error
  }
}