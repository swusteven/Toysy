import { connect } from 'react-redux'
import {logout} from "../../actions/session"
import { clearCartItemsUponCheckout } from '../../actions/cart';
import { clearOrderHistoryCheckout} from "../../actions/order"
import NavBar from "./nav_bar"
import { setModalToOpen } from '../../actions/modal';

const mSTP = state =>({
  currentUser: state.session.currentUser
});

const clearCartAndThenLogout = [
  clearCartItemsUponCheckout(),
  clearOrderHistoryCheckout(),
  logout()
]

const mDTP = dispatch => ({
  logout: () => clearCartAndThenLogout.map(action => dispatch(action)),
  setModalToOpen: ()=> dispatch(setModalToOpen())
})


export default connect(mSTP, mDTP)(NavBar)