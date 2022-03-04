import { connect } from "react-redux";
import {postReview} from "../../actions/review"
import ReviewsPostAReview from "./reviews_post_a_review";


const mDTP = dispatch => {
  debugger
  return {
    postReview: (data) => dispatch(postReview(data))
}}


export default connect(null, mDTP)(ReviewsPostAReview)