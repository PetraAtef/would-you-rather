export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function addUserQuestion ({ authedUser, qid }) {
  return {
    type: ADD_USER_QUESTION,
    payload: { authedUser, qid },
  }
}

export function addUserAnswer ({ answer, qid, authedUser }) {
  return {
    type: ADD_USER_ANSWER,
    payload: { answer, qid, authedUser },
  }
}