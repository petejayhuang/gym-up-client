const requestsReducer = (state = false, action) => {
  if (action.requesting === true || action.requesting === false) {
    return action.requesting
  }
  return state;
}

export default requestsReducer;