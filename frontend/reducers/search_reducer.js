import { RECEIVE_SEARCH_REQUEST } from "../actions/search"

const searchReducer = (oldState = {}, action)=>{
  Object.freeze(oldState);


  switch (action.type) {
    case RECEIVE_SEARCH_REQUEST:
      return action.value
    default:
      return oldState
  }
}

export default searchReducer