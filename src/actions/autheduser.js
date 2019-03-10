export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const LOGOUT_AUTHED_USER = 'LOGOUT_AUTHED_USER'

export function setAuthedUser (autheduser) {
    return {
      type: SET_AUTHED_USER,
      autheduser,
    }
  }

  export function logoutAuthedUser (autheduser) {
    return {
      type: LOGOUT_AUTHED_USER,
      autheduser,
    }
  }

  export function handleLogOut () {
    return (dispatch) => {
          dispatch(logoutAuthedUser(null))
    }
  } 

  export function handleLogIn (autheduser) {
    return (dispatch) => {
          dispatch(setAuthedUser({autheduser}))
    }
  }  