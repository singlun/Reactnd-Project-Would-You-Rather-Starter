export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser (autheduser) {
    return {
      type: SET_AUTHED_USER,
      autheduser,
    }
  }