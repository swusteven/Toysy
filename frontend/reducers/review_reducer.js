import {RECEIVE_REVIEWS} from "../actions/review"

const reviewReducer = (oldState = {}, action) =>{
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_REVIEWS:
      return Object.assign({}, action.reviews)
  
    default:
      return oldState
  }
}

export default reviewReducer