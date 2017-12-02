import { TOGGLE_UPDATE_SESSION_FORM } from '../actions/actionTypes'

const initialState = {
  showUpdateSessionForm: false
}

const updateSessionForm = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_UPDATE_SESSION_FORM:
      const tempShowFormValue = state.showUpdateSessionForm
      return Object.assign({}, state, { showUpdateSessionForm: !tempShowFormValue })
    default:
      return state;
  }
}

export default updateSessionForm