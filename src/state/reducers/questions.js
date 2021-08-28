import { ADD_QUESTION, ANSWER_QUESTION, RECEIVE_QUESTIONS } from '../action-creators/questions'

export default function tweets (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION:
      const {question} = action.question
      return{
        ...state,
        [question.id]: question
      }
    case ANSWER_QUESTION:
      const { authedUser, qid, answer } = action.payload
      return{
        ...state,
        [qid]:{
          ...state[qid],
          [answer]:{
            ...(state[qid][answer]),
            votes: [...(state[qid][answer].votes), authedUser],
          }
        }
      }
    default :
      return state
  }
}