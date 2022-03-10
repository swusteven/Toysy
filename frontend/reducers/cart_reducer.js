import { 
  RECEIVE_ALL_CART_ITEMS_FOR_USER,
  RECEIVE_SINGLE_ITEM_FOR_USER,
  REMOVE_SINGLE_ITEM_FOR_USER,
  REMOVE_ALL_ITEMS_FOR_USER,
  CLEAR_CART_ITEMS_UPON_LOGOUT
} from "../actions/cart"

const cartReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_ALL_CART_ITEMS_FOR_USER:
        return Object.assign({}, action.cartItems)
    case RECEIVE_SINGLE_ITEM_FOR_USER:
        delete nextState[action.cartItem.product_id]  
        return Object.assign({}, nextState, {[action.cartItem.product_id]: action.cartItem})
    case REMOVE_SINGLE_ITEM_FOR_USER:
        delete nextState[action.cartItem.product_id]  
        return nextState 
    case REMOVE_ALL_ITEMS_FOR_USER:
        return {}
    case CLEAR_CART_ITEMS_UPON_LOGOUT:
        return {}
    default:
      return oldState
  }
}

export default cartReducer