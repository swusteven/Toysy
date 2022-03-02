import { RECEIVE_ERRORS, REMOVE_ERRORS} from "../actions/session"

const sessionErrorsReducer = (oldState = {}, action) =>{
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors.responseJSON    // ["Fname can't be blank", 'Password is too short (minimum is 6 characters)']
    case REMOVE_ERRORS:
      return {}
  
    default:
      return oldState
  }
}

export default sessionErrorsReducer