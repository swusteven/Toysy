import { connect } from "react-redux";
import {fetchAllReviews} from "../../actions/review"
import ReviewsIndex from './reviews_index';

const mSTP = (state) => {
  return {
    reviews: Object.values(state.reviews)
  }
};

const mDTP = dispatch => {
  return {
    fetchAllReviews: (productId) => dispatch(fetchAllReviews(productId))
}}


export default connect(mSTP, mDTP)(ReviewsIndex)