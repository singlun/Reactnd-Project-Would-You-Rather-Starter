import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './autheduser'
import { showLoading, hideLoading } from 'react-redux-loading'

//const AUTHED_ID = 'tylermcginnis';

export  function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users)); 
                dispatch(setAuthedUser(sessionStorage.getItem('AUTHED_ID'))); 
                dispatch(receiveQuestions(questions));   
                dispatch(hideLoading())   
            })            
    }
}  
