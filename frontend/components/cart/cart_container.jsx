import { connect } from 'react-redux'
import CartIndex from './cart_index'
import { postItemsToOrderItem } from "../../actions/order";
import { 
  fetchAllCartItemsforUser,
  removeSingleItemInCartItem ,
  updateItemInCartItem,
  removeAllItemsInCartItem
} from '../../actions/cart'


const mSTP = state =>{
  return {
  cart: Object.values(state.cart),
  currentUser: state.session.currentUser,
  cartId: state.session.cartId
  
}
}

const mDTP = dispatch => ({
  fetchAllCartItems: (userId) => dispatch(fetchAllCartItemsforUser(userId)),
  removeSingleItemInCartItem: (cartItemId) => dispatch(removeSingleItemInCartItem(cartItemId)),
  updateItemInCartItem: (cartItemId, cartItem) => dispatch(updateItemInCartItem(cartItemId, cartItem)),
  postItemsToOrderItem: (userId, itemsInArray) => dispatch(postItemsToOrderItem(userId, itemsInArray)),
  removeAllItemsInCartItem: (cartId) => dispatch(removeAllItemsInCartItem(cartId))
})

export default connect(mSTP, mDTP)(CartIndex)


