import {
  CREATE_SESSION,
  CREATE_WORKOUT
} from '../actions/actionTypes'

const sessionDefaultState = {
  name: null,
  startTime: null,
  workouts: []
}

export const sessionsReducer = (state = sessionDefaultState, action) => {
  switch (action.type) {
    case CREATE_SESSION:
      return Object.assign({}, state, action.payload)
    case CREATE_WORKOUT:
      return Object.assign({}, state, { workouts: workoutsReducer(state.workouts, action) })
    default:
      return state
  }
}

const workoutsReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_WORKOUT:
      let newState = [...state]
      newState.push(action.payload)
      return newState
    default:
      return state
  }
}
