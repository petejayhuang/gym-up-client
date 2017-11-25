import {
  CREATE_SESSION,
  CREATE_WORKOUT
} from './actionTypes'

export const createSession = (currentSession) => {
  return {
    type: CREATE_SESSION,
    payload: currentSession
  }
}

export const createWorkout = (currentWorkout) => {
  return {
    type: CREATE_WORKOUT,
    payload: currentWorkout
  }
}