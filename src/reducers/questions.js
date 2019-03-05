import {RECEIVE_QUESTIONS, TOOGLE_QUESTION, ADD_QUESTION} from '../actions/questions'

export function questions (state = {}, action) {
    switch(action.type) {
      case RECEIVE_QUESTIONS :
        return {...state, ...action.questions}
      case ADD_QUESTION :
          const {questions}  = action
          // const optionOne = { "optionOne" : {"votes": [],
          //                                "text": action.questions.optionOne.text,
          //                               }
          //                             }
          // const optionTwo = { "optionOne" : {"votes": [],
          //                               "text": action.questions.optionTwo.text,
          //                               }
          //                             } 
          // const overAll = {optionOne,optionTwo}                                                    
          return {
            ...state,
            [questions.id] : questions
          }
      default :
        return state
    }
  }