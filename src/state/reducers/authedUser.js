import { REMOVE_AUTHED_USER, SET_AUTHED_USER } from '../action-creators/authedUser'

export default function authedUser (state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER :
      return action.id
    case REMOVE_AUTHED_USER:
      return null
    default :
      return state
  }
}