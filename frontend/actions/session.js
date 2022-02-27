import * as SessionUtil from '../utils/session'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";


const receiveCurrentUser = (user) =>({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () =>({
  type: LOGOUT_CURRENT_USER
});

//thunk action creators

export const signup = (user) => dispatch =>{
  return SessionUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)))
};

export const login = (user) => dispatch =>{
  return SessionUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
};

export const logout = () => dispatch => {
 return SessionUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
};