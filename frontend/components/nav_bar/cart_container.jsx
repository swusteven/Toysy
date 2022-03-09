import { connect } from 'react-redux'
import Cart from './cart'
import { fetchAllCartItemsforUser } from '../../actions/cart'


const mSTP = state =>{
  return {
  cart: state.cart,
  currentUser: state.session.currentUser,
  }
}

const mDTP = dispatch =>({
  fetchAllCartItemsforUser: (userId)=> dispatch(fetchAllCartItemsforUser(userId))
})

export default connect(mSTP, mDTP)(Cart)