import { TOGGLE_EDIT_SESSION_FORM } from '../actions/actionTypes'

const initialState = {
  showEditSessionForm: false
}

const editSessionForm = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_EDIT_SESSION_FORM:
      const tempShowFormValue = state.showEditSessionForm
      return Object.assign({}, state, { showEditSessionForm: !tempShowFormValue })
    default:
      return state;
  }
}

export default editSessionForm