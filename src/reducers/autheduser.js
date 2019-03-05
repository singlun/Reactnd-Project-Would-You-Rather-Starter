import {SET_AUTHED_USER} from '../actions/autheduser'

export function autheduser (state = null, action) {
    switch(action.type) {
      case SET_AUTHED_USER :
        return action.autheduser
      default :
        return state
    }
  }