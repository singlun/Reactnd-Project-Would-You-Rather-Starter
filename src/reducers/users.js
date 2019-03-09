import {RECEIVE_USERS}  from '../actions/users'
import {ADD_USER_QUESTION, ADD_USER_ANS}  from '../actions/questions'

export function users (state = {}, action) {
    switch(action.type) {
      case RECEIVE_USERS :
        return {...state, ...action.users}
      case ADD_USER_QUESTION :
        const {questions, users}  = action        
        
        const userQuestions = {
              [users]: {
                  ...state[users],
                  questions: state[users].questions.concat([questions])
              }
          }
        return {
          ...state,
          ...userQuestions,
        } 
      case ADD_USER_ANS :
        const {authedUser, qid, answer}  = action        
        
        const usersAns = {
          ...state,
          [authedUser]: {
            ...state[authedUser],
            answers: {
              ...state[authedUser].answers,
              [qid]: answer
            }
          }
        }
        return {
          ...usersAns
        }                 
      default :
        return state
    }
  }



