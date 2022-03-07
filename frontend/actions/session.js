import * as SessionUtil from '../utils/session'
import { createCart } from '../utils/cart';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const REMOVE_ERRORS = "REMOVE_ERRORS"


const receiveCurrentUser = (user) =>({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () =>({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors=(errors)=>({
  type: RECEIVE_ERRORS,
  errors
});

const receiveToRemoveErrors=()=>({
  type: REMOVE_ERRORS,
})


//thunk action creators
export const signup = (user) => dispatch =>{
  return SessionUtil.signup(user)
    .then((user) => dispatch(receiveCurrentUser(user)),
          (errors) => dispatch(receiveErrors(errors)))
    // .then((res)=> {
    //   debu
    //   const data = {user_id: res.user.id}
    //   return createCart(data)
    // })
};


export const login = (user) => dispatch =>{
  return SessionUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
        (errors) => dispatch(receiveErrors(errors)) 
    )
};

export const logout = () => dispatch => {
 return SessionUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
};

export const removeErrors =() => dispatch =>(
  dispatch(receiveToRemoveErrors())
)