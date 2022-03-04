import * as ApiUtilReview from "../utils/review";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEW"


const receiveReviews = (reviews) =>({
  type: RECEIVE_REVIEWS,
  reviews
})


//thunk action creators
export const fetchAllReviews = (productId) => dispatch => {
  return ApiUtilReview.fetchReviews(productId)
    .then(reviews => dispatch(receiveReviews(reviews)) )
}

