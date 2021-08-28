import { addUserAnswer, addUserQuestion, receiveUsers } from './users'
import { addQuestion, answerQuestion, receiveQuestions } from './questions'
import { getInitialData } from '../../database/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { _saveQuestion, _saveQuestionAnswer } from '../../database/_DATA'
// const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        // dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}

export function handleAddQuestion({ optionOneText, optionTwoText, author }) {
  return (dispatch) => {
    dispatch(showLoading())
    // if(optionOneText&&optionTwoText&&author){
      return _saveQuestion({ optionOneText, optionTwoText, author }).then(
        (question) => {
          dispatch(addUserQuestion({ authedUser: author, qid: question.id }))
          dispatch(addQuestion({question}))
          dispatch(hideLoading())
        }
      )
    // }
    
  }
}

export function handleAnswerQuestion({ authedUser, qid, answer }) {
  return (dispatch) => {
    dispatch(showLoading())
    return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(addUserAnswer({ authedUser, qid, answer }))
      dispatch(answerQuestion({ authedUser, qid, answer }))
      dispatch(hideLoading())
    })
  }
}