import { ADD_USER_ANSWER, ADD_USER_QUESTION, RECEIVE_USERS } from '../action-creators/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_USER_QUESTION:
      const { authedUser, qid } = action.payload
      return{
        ...state,
        [authedUser]:{
          ...state[authedUser],
          questions: [...state[authedUser].questions, qid]
        }
      }
    case ADD_USER_ANSWER:
      const { answer } = action.payload
      return{
        ...state,
        [action.payload.authedUser]:{
          ...state[action.payload.authedUser],
          answers:{
            ...state[action.payload.authedUser].answers,
            [action.payload.qid]: answer
          }
        }
      }
    default :
      return state
  }
}