import * as ApiUtilReview from "../utils/review";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"

const receiveReviews = (reviews) =>({
  type: RECEIVE_REVIEWS,
  reviews
})

const receiveReview = (review) =>({
  type: RECEIVE_REVIEW,
  review
})


//thunk action creators
export const fetchAllReviews = (productId) => dispatch => {
  return ApiUtilReview.fetchReviews(productId)
    .then(reviews => dispatch(receiveReviews(reviews)) )
};

export const postReview = (review) => dispatch =>{
  return ApiUtilReview.postReview(review)
    .then(review => dispatch(receiveReview(review)))
};

