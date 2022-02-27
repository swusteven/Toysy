import { connect } from 'react-redux'
import {logout} from "../../actions/session"
import NavBar from "./nav_bar"
import { setModalToOpen } from '../../actions/modal';

const mSTP = state =>({
  currentUser: state.session.currentUser
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  setModalToOpen: ()=> dispatch(setModalToOpen())
})


export default connect(mSTP, mDTP)(NavBar)