import {RECEIVE_QUESTIONS, ADD_USER_RESULT, ADD_QUESTION} from '../actions/questions'

export function questions (state = {}, action) {
    let questions
    switch(action.type) {
      case RECEIVE_QUESTIONS :
        return {...state, ...action.questions}
      case ADD_QUESTION :
           questions   = action.questions                                                
          return {
            ...state,
            [questions.id] : questions
          }
      case ADD_USER_RESULT :
          const {authedUser, qid, answer}  = action 

          questions = {
            ...state,
            [qid]: {
              ...state[qid],
              [answer]: {
                ...state[qid][answer],
                votes: state[qid][answer].votes.concat([authedUser])
              }
            }
          }

          return {  
            ...questions                   
                }                               
      default :
        return state
    }
  }
