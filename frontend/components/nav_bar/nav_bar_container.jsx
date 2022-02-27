import { connect } from 'react-redux'
import {logout} from "../../actions/session"
import NavBar from "./nav_bar"

const mSTP = state =>({
  currentUser: state.session.currentUser
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
})


export default connect(mSTP, mDTP)(NavBar)