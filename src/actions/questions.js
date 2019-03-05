import {saveQuestionAnswer, saveQuestion} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const TOOGLE_QUESTION = 'TOOGLE_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

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

export function handleAddQuestion (optionOneText, optionTwoText, autheduser) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: autheduser,
    }).then((Question) => 
      //console.log('Question', Question)
       dispatch(addQuestion(Question))
      )
      .then(() => dispatch(hideLoading()))
  }
}