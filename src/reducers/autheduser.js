import {SET_AUTHED_USER, LOGOUT_AUTHED_USER} from '../actions/autheduser'

export function autheduser (state = null, action) {
    switch(action.type) {
      case SET_AUTHED_USER :
        return action.autheduser
      case LOGOUT_AUTHED_USER :
        return null        
      default :
        return state
    }
  }