import { connect } from "react-redux";
import {postReview} from "../../actions/review"
import PostReview from "./post_review";

const mSTP = state =>({
  currentUser: state.session.currentUser
})

const mDTP = dispatch => {
  return {
    postReview: (data) => dispatch(postReview(data))
}}


export default connect(mSTP, mDTP)(PostReview)