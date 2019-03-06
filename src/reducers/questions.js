import {RECEIVE_QUESTIONS, TOOGLE_QUESTION, ADD_QUESTION} from '../actions/questions'

export function questions (state = {}, action) {
    switch(action.type) {
      case RECEIVE_QUESTIONS :
        return {...state, ...action.questions}
      case ADD_QUESTION :
          const {questions}  = action                                                 
          return {
            ...state,
            [questions.id] : questions
          }        
      default :
        return state
    }
  }