import {saveQuestionAnswer, saveQuestion} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'
export const ADD_USER_RESULT = 'ADD_USER_RESULT'
export const ADD_USER_ANS = 'ADD_USER_ANS'

export function receiveQuestions (questions) {
    return {
      type: RECEIVE_QUESTIONS,
      questions,
    }
  }

function addQuestion (questions) {
  return {
    type: ADD_QUESTION,
    questions,
  } 
}

function addUserQuestion (users, questions) {
  return {
    type: ADD_USER_QUESTION,
    users,
    questions,
  } 
}

function addUserAnsQuestion (authedUser, qid, answer) {
  return {
    type: ADD_USER_RESULT,
    authedUser,
    qid,
    answer,
  } 
}


function addUserAns (authedUser, qid, answer) {
  return {
    type: ADD_USER_ANS,
    authedUser,
    qid,
    answer,
  } 
}

export function handleAddQuestion (optionOneText, optionTwoText, autheduser) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: autheduser,
    }).then((Question) => 
       dispatch(addQuestion(Question))
      ).then((Question) => 
      dispatch(addUserQuestion(autheduser, Question.questions.id))
      )
      .then(() => dispatch(hideLoading()))
  }
}

export function handleAddAnsQuestion (authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    }).then((Question) => 
       dispatch(addUserAnsQuestion(authedUser, qid, answer))
      ).then((Question) => 
      dispatch(addUserAns(authedUser, qid, answer))
      ).then(() => dispatch(hideLoading()))
      .catch((error)=> console.log('Error ', error))

  }
}
