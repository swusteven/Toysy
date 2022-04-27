import { connect } from "react-redux";
import {fetchAllReviews, removeReview, editReview} from "../../actions/review"
import ReviewsIndex from './reviews_index';

const mSTP = (state) => {
  return {
    reviews: Object.values(state.reviews),
    currentUserId: state.session.currentUser ? state.session.currentUser.id : null    
  }
};

const mDTP = dispatch => {
  return {
    fetchAllReviews: (productId) => dispatch(fetchAllReviews(productId)),
    removeReview: (reviewId) => dispatch(removeReview(reviewId)),
    editReview: (reviewId, review) => dispatch(editReview(reviewId, review))
}}


export default connect(mSTP, mDTP)(ReviewsIndex)