import {RECEIVE_REVIEWS, RECEIVE_REVIEW, DELETE_REVIEW} from "../actions/review"

const reviewReducer = (oldState = {}, action) =>{
  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return Object.assign({}, action.reviews)

    case RECEIVE_REVIEW:
      return Object.assign({}, oldState, {[action.review.id]: action.review })

    case DELETE_REVIEW:
      delete nextState[action.review.id]
      return nextState
  
    default:
      return oldState
  }
}

export default reviewReducer