import { connect } from 'react-redux'
import CartIndex from './cart_index'
import { 
  fetchAllCartItemsforUser,
  removeSingleItemInCartItem ,
  updateItemInCartItem
} from '../../actions/cart'


const mSTP = state =>{
  return {
  cart: Object.values(state.cart),
  currentUser: state.session.currentUser,
}
}

const mDTP = dispatch => ({
  fetchAllCartItems: (userId) => dispatch(fetchAllCartItemsforUser(userId)),
  removeSingleItemInCartItem: (cartItemId) => dispatch(removeSingleItemInCartItem(cartItemId)),
  updateItemInCartItem: (cartItemId, cartItem) => dispatch(updateItemInCartItem(cartItemId, cartItem)),

})

export default connect(mSTP, mDTP)(CartIndex)


