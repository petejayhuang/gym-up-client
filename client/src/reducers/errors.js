const errors = (state = {}, action) => {
  if (action.error) {
    return action.error;
  }
  if (action.type === "CLEAR_ERRORS") {
    return {};
  }
  return state;
};

export default errors;
