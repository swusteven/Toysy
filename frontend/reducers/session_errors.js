import {  RECEIVE_ERRORS} from "../actions/session"

const sessionErrorsReducer = (oldState = [], action) =>{
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors.responseJSON
      // ["Fname can't be blank", 'Password is too short (minimum is 6 characters)']
  
    default:
      return oldState
  }


}

export default sessionErrorsReducer