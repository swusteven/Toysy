import { connect } from 'react-redux'
import CartIndex from './cart_index'
import { fetchAllCartItemsforUser } from '../../actions/cart'

const mSTP = state =>{
  return {
  cart: Object.values(state.cart),
  currentUser: state.session.currentUser,
}
}

const mDTP = dispatch => ({
  fetchAllCartItems: (userId) => dispatch(fetchAllCartItemsforUser(userId))
})

export default connect(mSTP, mDTP)(CartIndex)


