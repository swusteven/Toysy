import { RECEIVE_ALL_CART_ITEMS_FOR_USER } from "../actions/cart"

const cartReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_CART_ITEMS_FOR_USER:
        return Object.assign({}, oldState, action.cartItems)
      
  
    default:
      return oldState
  }

}

export default cartReducer