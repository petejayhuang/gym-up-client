const request = (state = false, action) => {
  if (action.requesting === true || action.requesting === false) {
    return action.requesting;
  }
  return state;
};

export default request;
