import { connect } from 'react-redux'
import Cart from './cart'


const mSTP = state =>{
  return {
  cart: state.cart,
  currentUser: state.session.currentUser,
  }
}

export default connect(mSTP, null)(Cart)