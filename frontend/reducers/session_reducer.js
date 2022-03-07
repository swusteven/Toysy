import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from "../actions/session"

const _nullState = {
  currentUser: null
}

const sessionReducer = (oldState = _nullState, action) =>{
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, {cartId: action.user.cartId, currentUser: action.user})
      
    case LOGOUT_CURRENT_USER:
      return _nullState

    default:
      return oldState
  }


}

export default sessionReducer